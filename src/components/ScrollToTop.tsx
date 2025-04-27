import React, { useLayoutEffect } from 'react';

const ScrollToTop = () => {
  // Sử dụng useLayoutEffect để cuộn trang lên đầu khi component được render
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <h1>Scroll to Top Example</h1>
      <p>Scroll down and click the button to go back to the top.</p>
    </div>
  );
};

export default ScrollToTop;
