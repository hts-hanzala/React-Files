import React, { Component } from "react";
import { Details } from "./ContextParent";

export default class CompB extends Component {
  render() {
    return (
      <div>
        <h1>Comp B</h1>
        <Details.Consumer>
          {(data) => (
            <div>
              <h2>{data.data.pass}</h2>;
              <button className="btn btn-primary" onClick={data.handleP}>
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
