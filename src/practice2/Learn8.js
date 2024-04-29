// # Hooks are functions which use react features in functional components.
// # useState allow functional components to use state.
// # useEffect allow functional components to use lifeCycle functions like componentDidMount , componentWillUpdate.
// # useContext all functional component to consume context.

import React, { useContext } from "react";
import { nameContext } from "../App";

const Learn8 = () => {
  const myName = useContext(nameContext);
  return (
    <div>
      <h3>My name is {myName}</h3>
    </div>
  );
};

export default Learn8;
