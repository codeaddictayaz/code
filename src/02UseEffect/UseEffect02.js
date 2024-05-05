import React, { useState } from "react";
import UseEffect01 from "./UseEffect01";

const UseEffect02 = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Button</button>
      {display && <UseEffect01 />}
    </div>
  );
};

export default UseEffect02;
