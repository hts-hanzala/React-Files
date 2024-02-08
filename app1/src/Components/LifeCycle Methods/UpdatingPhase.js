import React, { Component } from "react";

export default class UpdatingPhase extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      fruit: "apple",
    };
  }
  updateCounter = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };
  //   componentWillUpdate(nextProps, nextState) {
  //     if (nextState.score !== this.state.score) {
  //         console.log(`Score is about to update from ${this.state.score} to ${nextState.score}`);
  //     }
  //   }
  //   componentDidUpdate(prevProps, prevState){
  //     if (prevState.score !== this.state.score) {
  //         console.log('Score Updated', this.state.score);
  //     }
  //   }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fruit: "orange",
      });
    }, 5000);
  }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //     document.getElementById('div1').innerHTML = 'Before update fruit : ' + prevState.fruit
  //     document.getElementById('div2').innerHTML = 'After update fruit : ' + this.state.fruit
  // }

  render() {
    return (
      <div>
        <h1>Updating Phase</h1>
        <p>{this.state.score}</p>
        <button className="btn btn-primary" onClick={this.updateCounter}>
          Update State
        </button>
        <h1>{this.state.fruit}</h1>
        {/* <div id="div1"></div>
        <div id="div2"></div> */}
      </div>
    );
  }
}
