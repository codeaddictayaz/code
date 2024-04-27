import React, { useState } from "react";
import Practice5 from "./Practice5";

const Practice6 = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <Practice5 />}
    </div>
  );
};

export default Practice6;
