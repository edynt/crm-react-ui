import React, { useState, useDeferredValue } from "react";

const DeferredList = () => {
  const [items, setItems] = useState<string[]>([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ]);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  console.log('deferredQuery', deferredQuery);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Deferred List</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to filter list..."
        style={{ padding: "8px", marginBottom: "20px" }}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeferredList;
