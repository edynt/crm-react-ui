import React, { useState, useDeferredValue } from "react";

const DeferredAnimation = () => {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Deferred Animation</h2>
      <button onClick={handleIncrement}>Increment</button>
      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: "lightcoral",
          transform: `scale(${deferredCount / 10 + 1})`, // Điều chỉnh kích thước theo deferredCount
          transition: "transform 0.3s ease-out",
        }}
      >
        {deferredCount}
      </div>
    </div>
  );
};

export default DeferredAnimation;
