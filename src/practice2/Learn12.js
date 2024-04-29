// # hooks are functions which use react feactures in functional components.
// # useState are used in functional components to manage states.
// # usEffect are used for side effects, which provide features like subscription or submition.
// # useContext allow functional components to consume context.
// # useRef allow functional components to access and manuplate DOM elements directly.
import React, { useEffect, useRef } from "react";

const Learn12 = () => {
  const fName = useRef();
  const lName = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(fName.current.value);
    console.log(lName.current.value);
  };
  useEffect(() => {
    fName.current.focus();
  });
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="">First Name : </label>
        <input type="text" ref={fName} />
        <br />
        <label htmlFor="">Last Name : </label>
        <input type="text" ref={lName} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Learn12;
