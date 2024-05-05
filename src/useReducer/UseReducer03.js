import React, { useReducer } from "react";
const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
};
const UseReducer03 = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialCount);
  return (
    <div>
      <h3>Count :{count}</h3>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <h3>CountTwo :{countTwo}</h3>
      <button onClick={() => dispatchTwo("increment")}>increment</button>
      <button onClick={() => dispatchTwo("decrement")}>decrement</button>
      <button onClick={() => dispatchTwo("reset")}>reset</button>
    </div>
  );
};

export default UseReducer03;
