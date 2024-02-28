import "./App.css";
import React from "react";
// import Pract from "./Components/Pract";
// import Main from "./Components/ReactRouter/Main";
// import ClassBasedComponents from "./Components/ClassBasedComponents";
// import Picture from "./Components/Picture";
// import MountingPhase from "./Components/LifeCycle Methods/MountingPhase";
// import UpdatingPhase from "./Components/LifeCycle Methods/UpdatingPhase";
// import UnmountingPhase from "./Components/LifeCycle Methods/UnmountingPhase";
// import ErrorBoundary, {
//   MyComponent,
// } from "./Components/LifeCycle Methods/ErrorBoundary";
// import HttpRequest from "./Components/AxiosRequests/HttpRequest";
// import Forms, { FormsClass } from "./Components/Forms";
import BarChart from "./BarChart";
// import UseState from "./Components/Hooks/UseState";
// import UseEffect from "./Components/Hooks/UseEffect";
// import UseMemo from "./Components/Hooks/UseMemo";
// import UseCallback from "./Components/Hooks/UseCallback";
// import { UseReducer } from "./Components/Hooks/UseReducer";
// import UseRef from "./Components/Hooks/UseRef";
// import ContextParent from "./Components/Hooks/Context API/ContextParent";
// import UseContextP from "./Components/Hooks/Context API/UseContext/UseContextP";
// import CustomHooks from "./Components/Hooks/CustomHooks";
// import HttpPost from "./Components/AxiosRequests/HttpPost";
// import HttpDelete from "./Components/AxiosRequests/HttpDelete";

export const sum = (a,b) => {
  return a + b
}

export const getUser = () => {
  return{
    id:1,
    Name : "Tom",
    Department : "Tester"
  }
}

function App() {
  // let link = "/logo192.png";
  return (
    <div className="mx-5">
      {/* <h1>Learning React</h1> */}
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
      {/* <Forms />
      <FormsClass /> */}
      {/* <UseState />
      <UseEffect />
      <UseMemo />
      <UseCallback />
      <UseReducer />
      <UseRef /> */}
      {/* <ContextParent /> */}
      {/* <UseContextP/>
      <CustomHooks/> */}
      {/* <HttpPost />
      <HttpDelete /> */}
      {/* <Main /> */}
      <BarChart />
    </div>
  );
}

export default App;
