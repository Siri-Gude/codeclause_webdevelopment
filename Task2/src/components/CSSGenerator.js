import React from 'react';

function CSSGenerator({ colors, gradientType }) {
  const gradient = `${gradientType}-gradient(${colors.join(', ')})`;
  const cssCode = `background: ${gradient};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
  };

  return (
    <div className="css-generator">
      <h2>CSS Code</h2>
      <pre>{cssCode}</pre>
      <button onClick={copyToClipboard}>Copy CSS</button>
    </div>
  );
}

export default CSSGenerator;
