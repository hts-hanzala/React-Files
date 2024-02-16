import React, { Component } from "react";
import { Details } from "./ContextParent";

export default class CompC extends Component {
  render() {
    return (
      <div>
        <h1>Comp C</h1>
        <Details.Consumer>
          {(data) => (
            <div>
              <h2>{data.data.email}</h2>;
              <button className="btn btn-primary" onClick={data.handleE}>
                Click to Change
              </button>
              ;
            </div>
          )}
        </Details.Consumer>
      </div>
    );
  }
}
