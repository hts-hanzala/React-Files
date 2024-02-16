import React from "react";
import { Details } from "./UseContextP";

export default function CompC() {
  return (
    <div>
      <Details.Consumer>{(data) => <h2>{data.email}</h2>}</Details.Consumer>
    </div>
  );
}
