import React, { useState, useCallback } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const handleCLick = useCallback(() => {
    alert(`Button clicked Count is ${count}`);
  }, [count]);
  return (
    <div>
      <h1>useCallback Hook</h1>
      <h2>Parent Function</h2>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-primary"
      >
        Increment
      </button>
      <Child onClick={handleCLick} />
    </div>
  );
}

const Child = ({ onClick }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <button className="btn btn-primary" onClick={onClick}>
        Click Me
      </button>
    </div>
  );
};
