// # Hooks are functions which use react Features in functional Components .
// # useState allow functional components to manage states.
//Array Example

import React, { useState } from "react";

const Learn2 = () => {
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
      {items.map((item) => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
};

export default Learn2;
