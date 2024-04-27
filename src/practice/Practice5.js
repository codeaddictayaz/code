import React, { useEffect, useState } from "react";

const Practice5 = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const mouseLog = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("mounted");
    window.addEventListener("mousemove", mouseLog);
    return () => {
      console.log("unmounted");
      window.removeEventListener("mousemove", mouseLog);
    };
  }, []);
  return (
    <div>
      <h3>X :{x}</h3>
      <h3>Y :{y}</h3>
    </div>
  );
};

export default Practice5;
