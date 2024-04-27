import React, { useRef } from "react";

const Practice10 = () => {
  const inputRef = useRef();
  const handelClick = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    } else {
      console.log("Input element is not available");
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handelClick}>Get Value</button>
      <h3>{inputRef.current && inputRef.current.value}</h3>
    </div>
  );
};

export default Practice10;
