// #hooks are functions which use react features in functional components .
// useState allow functional components to manage states.
import React from "react";
import { useState } from "react";

const Learn1 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Learn1;
