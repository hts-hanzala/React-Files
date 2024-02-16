import React, { Component, createContext } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

const Details = createContext();

export default class ContextParent extends Component {
  state = {
    user: "HTS",
    pass: "1234",
    email: "hts@example.com",
  };
  handleEmail = () => {
    this.setState({ email : "hts1@example.com" });
  }
  handlePass = () => {
    this.setState({ pass : "abcd" });
  }
  render() {
    const handleNext = {
      data: this.state,
      handleP : this.handlePass,
      handleE : this.handleEmail,
    };
    return (
      <div>
        <h1>Context Parent</h1>
        <Details.Provider value={handleNext}>
          <CompA />
          <CompB />
          <CompC />
        </Details.Provider>
      </div>
    );
  }
}

export { Details };
