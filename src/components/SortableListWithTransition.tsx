import React, { useState, useTransition } from "react";

const SortableListWithTransition = () => {
  const [items, setItems] = useState<string[]>([
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew",
  ]);
  const [isAscending, setIsAscending] = useState(true);
  const [isPending, startTransition] = useTransition(); // Trì hoãn sắp xếp

  const toggleSort = () => {
    startTransition(() => {
      setIsAscending(!isAscending);
    });
  };

  const sortedItems = [...items].sort((a, b) => {
    if (isAscending) {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  return (
    <div>
      <h2>Sortable List with Transition</h2>
      <button onClick={toggleSort}>
        {isAscending ? "Sort Descending" : "Sort Ascending"}
      </button>
      {isPending ? <p>Sorting...</p> : null}
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortableListWithTransition;
