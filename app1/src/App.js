import "./App.css";
import React from "react";
import Pract from "./Components/Pract";
import Navbar from "./Components/Navbar";
import ClassBasedComponents from "./Components/ClassBasedComponents";

function App() {
  return (
    <>
      <Navbar />
      <h1>Learning React</h1>
      <br />
      <p>this is para</p>
      <Pract />
      <ClassBasedComponents initial={10}/>
    </>
  );
}

export default App;
