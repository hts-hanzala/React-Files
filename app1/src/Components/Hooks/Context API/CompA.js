import React, { Component } from "react";
import { Details } from "./ContextParent";

export default class CompA extends Component {
  render() {
    return (
      <div>
        <h1>Comp A</h1>
        <Details.Consumer>
          {(data) => {
            return <h2>{data.data.user}</h2>;
          }}
        </Details.Consumer>
      </div>
    );
  }
}
