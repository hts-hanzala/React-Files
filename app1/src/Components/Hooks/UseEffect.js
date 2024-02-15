import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      // setCount((prevCount)=> prevCount - 1)
      setCount((prevCount) => {
        if (count === 0) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, [count]);
  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>{count}</p>
    </div>
  );
};

export default UseEffect;
