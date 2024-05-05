import React, { useState } from "react";

const UseState02 = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <h3>
        {items.map((item) => (
          <div key={item.id}>{item.value}</div>
        ))}
      </h3>
    </div>
  );
};

export default UseState02;
