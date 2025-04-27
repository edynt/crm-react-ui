import React, { useState, useLayoutEffect, useRef } from 'react';

const DetectVisibility = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sử dụng useLayoutEffect để theo dõi khi phần tử xuất hiện trong viewport
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kiểm tra ngay khi render
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          height: '200px',
          backgroundColor: isVisible ? 'lightgreen' : 'lightcoral',
        }}
      >
        {isVisible ? "I'm in the viewport!" : "I'm not in the viewport."}
      </div>
      <p>Scroll down to see the change in visibility.</p>
    </div>
  );
};

export default DetectVisibility;
