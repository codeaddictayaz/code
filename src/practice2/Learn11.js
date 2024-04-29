import React, { useRef } from "react";

const Learn11 = () => {
  const fRef = useRef();
  const lRef = useRef();
  const handelForm = (e) => {
    e.preventDefault();
    console.log(fRef.current.value);
    console.log(lRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handelForm}>
        <label htmlFor="">First Name :</label>
        <input type="text" ref={fRef} />
        <br />
        <label htmlFor="">Last Name :</label>
        <input type="text" ref={lRef} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Learn11;
