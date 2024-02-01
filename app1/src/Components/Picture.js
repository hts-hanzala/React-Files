import React from "react";

export default function Picture(props) {
  return (
    <div>
      <h1>Picture Component</h1>
      <img src={props.link} />
      <p>{props.children}</p>
    </div>
  );
}
