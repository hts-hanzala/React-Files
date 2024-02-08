import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
    console.log("Error occured in Error Boundary", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something Went Wrong</div>;
    }
    return this.props.children
  }
}

export class MyComponent extends Component {
  render() {
    throw new Error("This is an intentional Error");
  }
}
