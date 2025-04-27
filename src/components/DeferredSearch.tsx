import React, { useState, useDeferredValue } from "react";

const DeferredSearch = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query); // Sử dụng useDeferredValue để trì hoãn giá trị tìm kiếm

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2>Deferred Search</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{ padding: "8px", marginBottom: "20px" }}
      />
      <p>Searching for: {deferredQuery}</p>
    </div>
  );
};

export default DeferredSearch;
