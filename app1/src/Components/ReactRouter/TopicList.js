import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function TopicList() {
  // const {id} =  useParams()
  const { name } = useParams();
  const location = useLocation();
  
  return (
    <div>
      <h1>Topic List</h1>
      {/* <h3>This page is related to {id}.</h3> */}
      <h3>This page is related to {name}.</h3>
      <h5>You are currently on {location.pathname.replace(/\//g, ",")}</h5>
    </div>
  );
}
