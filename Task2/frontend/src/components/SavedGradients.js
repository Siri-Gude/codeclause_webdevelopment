import React from 'react';

function SavedGradients({ savedGradients, setColors, setGradientType, setDirection, onDelete }) {
  const applyGradient = (gradient) => {
    setColors(gradient.colors);
    setGradientType(gradient.gradientType);
    setDirection(gradient.direction);
  };

  return (
    <div className="saved-gradients">
      <h2>Saved Gradients</h2>
      {savedGradients.length === 0 ? (
        <p>No saved gradients</p>
      ) : (
        <ul>
          {savedGradients.map((gradient, index) => (
            <li key={index}>
              <div
                className="gradient-preview"
                style={{
                  background: `${gradient.gradientType}-gradient(${gradient.direction}, ${gradient.colors.map(
                    (color) => `${color.color}${color.opacity < 1 ? Math.round(color.opacity * 255).toString(16).padStart(2, '0') : ''} ${color.position}%`
                  ).join(', ')})`,
                }}
                onClick={() => applyGradient(gradient)}
              ></div>
              <p><strong>{gradient.name}</strong></p>
              <p>{`${gradient.gradientType.charAt(0).toUpperCase() + gradient.gradientType.slice(1)} Gradient`}</p>
              <button onClick={() => onDelete(gradient.name)} className="delete-gradient">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedGradients;
