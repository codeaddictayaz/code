import React, { useEffect, useRef, useState } from "react";

const Learn14 = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });

  return (
    <div>
      <label htmlFor="">Enter Name :</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Count : {count.current}</h3>
    </div>
  );
};

export default Learn14;
