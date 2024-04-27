import React, { useContext } from "react";
import { nameContext } from "../App";

const Practice9 = () => {
  const myName = useContext(nameContext);
  return <div> my name is {myName}</div>;
};

export default Practice9;
