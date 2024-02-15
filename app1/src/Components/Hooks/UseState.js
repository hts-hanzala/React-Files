import React, { useState } from "react";

export default function UseState() {
  const [name, setName] = useState("Jack");
  const handleClick = (e) => {
    setName("Jill");
  };
  return (
    <div>
      <h1>useState Hook</h1>
      <h3>{name}</h3>
      <button className="btn btn-primary" onClick={handleClick}>
        Change State
      </button>
    </div>
  );
}
