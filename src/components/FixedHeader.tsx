import React, { useState, useLayoutEffect, useRef } from 'react';

const FixedHeader = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Sử dụng useLayoutEffect để thay đổi trạng thái sticky header khi người dùng cuộn trang
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={headerRef}
        style={{
          position: isSticky ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightgreen',
          padding: '10px',
          boxShadow: isSticky ? '0 4px 2px -2px gray' : 'none',
        }}
      >
        <h2>Sticky Header</h2>
      </div>
      <div style={{ height: '2000px' }}>
        <p>Scroll down to see the header become sticky.</p>
      </div>
    </div>
  );
};

export default FixedHeader;
