import React, { useState, useEffect } from "react";

const UseEffect01 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("item Mounted");
    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("item unMounted");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      <h3>X :{x}</h3>
      <h3>Y :{y}</h3>
    </div>
  );
};

export default UseEffect01;
