// # hooks are functions which use react features in functional components.
// # useState allow functional components to manage states .
// # Object Example
import React, { useState } from "react";

const Learn3 = () => {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.FirstName}
        onChange={(e) => setName({ ...name, FirstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default Learn3;
