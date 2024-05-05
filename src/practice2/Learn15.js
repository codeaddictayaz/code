import React, { useReducer } from "react";
const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "reset":
      return initialValue;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const Learn15 = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default Learn15;
