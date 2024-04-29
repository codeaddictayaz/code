// # hooks are functions which use react features in functional components
// # useState hook provide functional components with state.
// # useEffect hook provide side effects, which include features like data fetching ,subscribtion or manually changing the DOM.
// # useContext allow functional components to consume context.
// # useRef allow functional component to access and manuplate DOM elements directly.
import React, { useEffect, useRef, useState } from "react";

const Learn9 = () => {
  const [colorChange, setColorChange] = useState(true);
  const myRef = useRef();
  useEffect(() => {
    console.log(myRef.current.innerHTML);
  }, []);
  const changeColor = () => {
    const newColor = colorChange ? "" : "#ff33ff";
    myRef.current.style.color = newColor;
    setColorChange(!colorChange);
  };

  return (
    <div>
      <h3 ref={myRef}>
        {" "}
        useRef allow functional component to access and manuplate DOM elements
        directly
      </h3>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Learn9;
