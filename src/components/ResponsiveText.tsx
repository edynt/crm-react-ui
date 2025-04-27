import React, { useState, useLayoutEffect } from 'react';

const ResponsiveText = () => {
  const [fontSize, setFontSize] = useState(16);

  // Sử dụng useLayoutEffect để thay đổi font-size dựa trên kích thước cửa sổ
  useLayoutEffect(() => {
    const updateFontSize = () => {
      const newFontSize = window.innerWidth < 600 ? 14 : 16;
      setFontSize(newFontSize);
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);

    return () => {
      window.removeEventListener('resize', updateFontSize);
    };
  }, []);

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <h2>Responsive Text</h2>
      <p>The font size of this text changes based on the window size.</p>
    </div>
  );
};

export default ResponsiveText;
