// # hooks are functions which use react features in functional components.
// # useState hook allow functional components to manage state.
// # useEffect hook allow functional components to perform side effects with features like subscription and submition.
// # useContext hook allow functional components to consume context.
// # useRef hook allow functional components to  access & manuplate DOM directly.
import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const Learn13 = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <label htmlFor="">Enter Name :</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Render Count : {count.current}</h3>
    </div>
  );
};

export default Learn13;
