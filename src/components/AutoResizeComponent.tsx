import React, { useRef, useLayoutEffect, useState } from 'react';

const AutoResizeComponent = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  // Sử dụng useLayoutEffect để đo lường kích thước của phần tử trước khi cập nhật DOM
  useLayoutEffect(() => {
    if (boxRef.current) {
      console.log('useLayoutEffect width', boxRef.current.offsetWidth);
      console.log('useLayoutEffect height', boxRef.current.offsetHeight);
      setDimensions({
        width: boxRef.current.offsetWidth,
        height: boxRef.current.offsetHeight,
      });
    }
  }, []); // Chạy 1 lần sau khi DOM đã được render

  return (
    <div>
      <div ref={boxRef} style={{ width: '100%', height: '200px', backgroundColor: 'lightblue' }}>
        Resize the window to see the changes.
      </div>
      <p>
        Current Dimensions: {dimensions.width}px x {dimensions.height}px
      </p>
    </div>
  );
};

export default AutoResizeComponent;
