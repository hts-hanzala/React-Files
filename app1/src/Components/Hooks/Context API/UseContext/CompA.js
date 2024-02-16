import React from "react";
import { Details } from "./UseContextP";

export default function CompA() {
  return (
    <div>
      <Details.Consumer>{(data) => <h2>{data.user}</h2>}</Details.Consumer>
    </div>
  );
}
