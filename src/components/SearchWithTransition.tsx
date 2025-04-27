import React, { useState, useTransition } from "react";

const SearchWithTransition = () => {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition(); // Sử dụng useTransition để trì hoãn cập nhật không quan trọng

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    startTransition(() => {
      console.log('value', value);
      setQuery(value); // Chỉ bắt đầu cập nhật giá trị khi không cần thiết cập nhật ngay lập tức
    });
  };

  const items = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search with Transition</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{ padding: "8px", marginBottom: "20px" }}
      />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWithTransition;
