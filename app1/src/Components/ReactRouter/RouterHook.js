import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Topic from "./Topic";
import TopicList from "./TopicList";
import ErrorCompo from "./ErrorCompo";

export default function RouterHook() {
  const element = useRoutes([
    { path: "/" },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/topic", element: <Topic /> },
    { path: "/topic/:id/:name", element: <TopicList /> },
    { path: "*", element: <ErrorCompo /> },
  ]);
  return element;
}
