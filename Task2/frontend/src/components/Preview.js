import React from 'react';

function Preview({ colors, gradientType }) {
  const gradient = `${gradientType}-gradient(${colors.join(', ')})`;
  const style = {
    background: gradient,
    width: '100%',
    height: '200px',
  };

  return (
    <div className="preview" style={style}>
      <p>Preview</p>
    </div>
  );
}

export default Preview;
