import React, { useState, useEffect } from 'react';
import ColorPicker from './components/ColorPicker';
import GradientOptions from './components/GradientOptions';
import Preview from './components/Preview';
import CSSGenerator from './components/CSSGenerator';
import SavedGradients from './components/SavedGradients';
import './App.css';

function App() {
  const [colors, setColors] = useState([{ color: '#FF5733', opacity: 1, position: 0 }]);
  const [gradientType, setGradientType] = useState('linear');
  const [direction, setDirection] = useState('to right');
  const [savedGradients, setSavedGradients] = useState([]);
  const [gradientName, setGradientName] = useState('');

  useEffect(() => {
    const storedGradients = JSON.parse(localStorage.getItem('savedGradients'));
    if (storedGradients) setSavedGradients(storedGradients);
  }, []);

  const saveGradient = () => {
    if (gradientName.trim() === '') {
      alert('Please enter a name for the gradient.');
      return;
    }

    const gradientExists = savedGradients.some(
      (gradient) => gradient.name === gradientName.trim()
    );

    if (gradientExists) {
      alert('A gradient with this name already exists. Please choose a different name.');
      return;
    }

    const newGradient = { name: gradientName.trim(), colors, gradientType, direction };
    const updatedSavedGradients = [...savedGradients, newGradient];
    setSavedGradients(updatedSavedGradients);
    localStorage.setItem('savedGradients', JSON.stringify(updatedSavedGradients));
    setGradientName('');
  };

  const deleteGradient = (name) => {
    const updatedSavedGradients = savedGradients.filter(
      (gradient) => gradient.name !== name
    );
    setSavedGradients(updatedSavedGradients);
    localStorage.setItem('savedGradients', JSON.stringify(updatedSavedGradients));
  };

  return (
    <div className="App">
      <h1>Background Generator</h1>
      <ColorPicker colors={colors} setColors={setColors} />
      <GradientOptions
        gradientType={gradientType}
        setGradientType={setGradientType}
        direction={direction}
        setDirection={setDirection}
      />
      <Preview colors={colors} gradientType={gradientType} direction={direction} />
      <CSSGenerator colors={colors} gradientType={gradientType} direction={direction} />
      <input
        type="text"
        placeholder="Gradient Name"
        value={gradientName}
        onChange={(e) => setGradientName(e.target.value)}
      />
      <button onClick={saveGradient} className="save-gradient">Save Gradient</button>
      <SavedGradients
        savedGradients={savedGradients}
        setColors={setColors}
        setGradientType={setGradientType}
        setDirection={setDirection}
        onDelete={deleteGradient}
      />
    </div>
  );
}

export default App;
