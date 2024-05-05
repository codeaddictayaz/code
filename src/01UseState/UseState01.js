// # hooks are functions which use react features in functional Components.
// # useState are used to manage states in functional components.
// # useEffect are used to manage side effect in functional components.
// # useContext are use to consume context in functional components.
// # useRef are used to access and maunplate DOM elements.
import React from "react";
import { useState } from "react";

const UseState01 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        add
      </button>
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        subtract
      </button>
    </div>
  );
};

export default UseState01;
