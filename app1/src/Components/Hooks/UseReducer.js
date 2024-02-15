import React, { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
