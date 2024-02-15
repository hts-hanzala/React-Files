import "./App.css";
import React from "react";
import Pract from "./Components/Pract";
import Navbar from "./Components/Navbar";
import ClassBasedComponents from "./Components/ClassBasedComponents";
import Picture from "./Components/Picture";
import MountingPhase from "./Components/LifeCycle Methods/MountingPhase";
import UpdatingPhase from "./Components/LifeCycle Methods/UpdatingPhase";
import UnmountingPhase from "./Components/LifeCycle Methods/UnmountingPhase";
import ErrorBoundary, {
  MyComponent,
} from "./Components/LifeCycle Methods/ErrorBoundary";
import HttpRequest from "./Components/HttpRequest";
import Form, { FormsClass } from "./Components/Forms";
import UseState from "./Components/Hooks/UseState";
import UseEffect from "./Components/Hooks/UseEffect";
import UseMemo from "./Components/Hooks/UseMemo";
import UseCallback from "./Components/Hooks/UseCallback";
import { UseReducer } from "./Components/Hooks/UseReducer";
import UseRef from "./Components/Hooks/UseRef";

function App() {
  let link = "/logo192.png";
  return (
    <div className="mx-5">
      <Navbar title={"HTS"} home={"Dashboard"} />
      <h1>Learning React</h1>
      {/* <br />
      <p>this is para</p>
      <Pract />
      <ClassBasedComponents link={link} value={10} />
      <Picture link={link} children={"This is an example of props.children"} /> */}
      {/* <MountingPhase />
      <UpdatingPhase /> */}
      {/* <UnmountingPhase /> */}
      {/* <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary> */}
      {/* <HttpRequest /> */}
      {/* <Form />
      <FormsClass/> */}
      <UseState />
      <UseEffect />
      <UseMemo />
      <UseCallback />
      <UseReducer />
      <UseRef />
    </div>
  );
}

export default App;
