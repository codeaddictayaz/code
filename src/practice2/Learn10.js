import React, { useRef, useEffect } from "react";

const Learn10 = () => {
  const fRef = useRef();
  const lRef = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(fRef.current.value);
    console.log(lRef.current.value);
  };
  useEffect(() => {
    fRef.current.focus();
  });
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="">Enter First Name :</label>
        <input type="text" ref={fRef} placeholder="First Name" />
        <br />

        <label htmlFor="">Enter Last Name :</label>

        <input type="text" ref={lRef} placeholder="Last Name" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Learn10;
