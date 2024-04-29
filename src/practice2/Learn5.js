// # hooks are functions which use react features in functional components.
// # useState allow functional components to manage states.
// # useEffect allow functional components to use lifeCycle features like componentDidMount, componentDidUpdate and componentWillUnmount
import React, { useState } from "react";
import Learn4 from "./Learn4";

const Learn5 = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <Learn4 />}
    </div>
  );
};

export default Learn5;
