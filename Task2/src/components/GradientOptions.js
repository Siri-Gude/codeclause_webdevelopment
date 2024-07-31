import React from 'react';

function GradientOptions({ gradientType, setGradientType }) {
  return (
    <div className="gradient-options">
      <label>
        <input
          type="radio"
          value="linear"
          checked={gradientType === 'linear'}
          onChange={(e) => setGradientType(e.target.value)}
        />
        Linear
      </label>
      <label>
        <input
          type="radio"
          value="radial"
          checked={gradientType === 'radial'}
          onChange={(e) => setGradientType(e.target.value)}
        />
        Radial
      </label>
    </div>
  );
}

export default GradientOptions;
