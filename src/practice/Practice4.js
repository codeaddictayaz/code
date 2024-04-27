import React, { useState, useEffect } from "react";

const Practice4 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState([]);
  useEffect(() => {
    console.log("running");
  }, [count]);
  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName([e.target.value])}
        />
        <h3>{JSON.stringify(name)}</h3>
      </div>
    </div>
  );
};

export default Practice4;
