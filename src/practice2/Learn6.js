// # hooks are functions which use react features in functional components.
// # useState allow functional components to use state.
// # useEffect allow functional components to manage lifeCycle functions like componentDidMount, componentDidUpdate and componentWillUnmount.
import React, { useEffect, useState } from "react";

const Learn6 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState([]);
  useEffect(() => {
    console.log("first");
  }, [count]);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName([e.target.value])}
        />
      </div>
    </div>
  );
};

export default Learn6;
