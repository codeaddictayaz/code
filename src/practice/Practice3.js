import React, { useState } from "react";

const Practice3 = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 5) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>

      {items.map((item) => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
};

export default Practice3;
