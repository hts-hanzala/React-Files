import "./App.css";
import React from "react";
import Pract from "./Components/Pract";
import Navbar from "./Components/Navbar";
import ClassBasedComponents from "./Components/ClassBasedComponents";
import Picture from "./Components/Picture";

function App() {
  let link = "/logo192.png";
  return (
    <div>
      <Navbar title={'HTS'} home={'Dashboard'}/>
      <h1>Learning React</h1>
      <br />
      <p>this is para</p>
      <Pract />
      <ClassBasedComponents link={link} value={10} />
      <Picture
        link={link}
        children={"This is an example of props.children"}
      />
    </div>
  );
}

export default App;
