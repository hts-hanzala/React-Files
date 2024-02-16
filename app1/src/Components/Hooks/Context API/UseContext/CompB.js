import React from 'react'
import { Details } from "./UseContextP";

export default function CompB() {
  return (
    <div>
      <Details.Consumer>{(data) => <h2>{data.pass}</h2>}</Details.Consumer>
    </div>
  );
}
