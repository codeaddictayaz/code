import React, { useState } from "react";

const UseState03 = () => {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.FirstName}
        placeholder="FirstName"
        onChange={(e) => setName({ ...name, FirstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        placeholder="LastName"
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default UseState03;
