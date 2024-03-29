import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Topic from "./Topic";
import TopicList from "./TopicList";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import ErrorCompo from "./ErrorCompo";
import RouterHook from "./RouterHook";

export default function Main() {
  return (
    <Router>
      <>
        <Navbar title={"HTS"} home={"Home"} />
        {/* <Routes>
          <Route path="/" /> */}
          {/* <Route index element={<Home/>}/> */}
          {/* <Route element={<Outlet />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/topic" element={<Topic />} />
            <Route path="/topic/:id/:name" element={<TopicList />} />
            <Route path="*" element={<ErrorCompo />} />
          </Route>
        </Routes> */}
        <RouterHook/>
      </>
    </Router>
  );
}
