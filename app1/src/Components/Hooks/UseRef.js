import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>useRef Hook</h1>
      <input type="text" ref={inputRef} />
      <input type="text" />
    </div>
  );
};

export default UseRef;
