import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  const handleForward = () => {
    navigate(+1);
  };
  const handleBackward = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>This is About</h1>
      {/* <button onClick={handleNavigate}>Goto Contact</button> */}
      <button onClick={handleForward}>Forward</button>
      <button onClick={handleBackward}>Backward</button>
    </div>
  );
}
