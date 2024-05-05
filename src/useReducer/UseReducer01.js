import React, { useReducer } from "react";
const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "reset":
      return initialCount;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export const UseReducer01 = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
};
