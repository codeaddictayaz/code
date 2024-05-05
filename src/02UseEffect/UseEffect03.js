import React, { useState, useEffect } from "react";

const UseEffect03 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("mounted");
  }, [count]);
  return (
    <div>
      <h3>COUNT : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Only</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseEffect03;
