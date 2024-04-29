// # hooks are functions which use react features in functional components.
// # useState allow functional Components to manage states.
// # useEffect allow functional components to use lifCycle functions like componentDidMount, componentDidUpdate and componentWillUnmount
import React, { useEffect, useState } from "react";

const Learn4 = () => {
  const [x, setx] = useState();
  const [y, setY] = useState();
  const mouseMove = (e) => {
    setx(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("mounted");
    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("unMounted");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>X : {x}</h3>
      <h3>Y : {y}</h3>
    </div>
  );
};

export default Learn4;
