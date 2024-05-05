import React, { useReducer } from "react";
const initialCount = {
  firstCount: 0,
  secondCount: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementFirst":
      return { ...state, firstCount: state.firstCount + action.value };
    case "incrementSecond":
      return { ...state, secondCount: state.secondCount + action.value };
    case "reset":
      return initialCount;
    default:
      return state;
  }
};
const UseReducer02 = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <h3>COUNT : {count.firstCount}</h3>
      <h3>COUNT : {count.secondCount}</h3>
      <button onClick={() => dispatch({ type: "incrementFirst", value: 1 })}>
        incrementFirst
      </button>
      <button onClick={() => dispatch({ type: "incrementSecond", value: 5 })}>
        incrementSecond
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default UseReducer02;
