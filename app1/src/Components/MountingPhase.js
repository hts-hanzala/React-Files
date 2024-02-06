import React, { Component } from "react";

export default class MountingPhase extends Component {
  constructor() {
    super();
    this.state = {
      score: 10,
      fruit: "apple",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      score: 100,
    };
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            fruit: 'orange',
        })
    }, 5000)
  }
  render() {
    return (
      <div>
        <h1>Mounting Phase</h1>
        <p>{this.state.score}</p>
        <p>{this.state.fruit}</p>
      </div>
    );
  }
}
