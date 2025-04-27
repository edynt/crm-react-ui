import React, { useState, useTransition } from "react";

const SlowLoadingContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition(); // Trì hoãn cập nhật dữ liệu

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      startTransition(() => {
        setData([
          "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew",
        ]);
        setIsLoading(false);
      });
    }, 2000); // Giả lập việc tải dữ liệu
  };

  return (
    <div>
      <h2>Slow Loading Content</h2>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load Content"}
      </button>
      {isPending ? <p>Loading content...</p> : null}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlowLoadingContent;
