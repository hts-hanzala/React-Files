import React, { Component } from 'react'

export default class ClassBasedComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
          counter:1
        }
      }
     updateCounter = () => {
      this.setState({
        counter : this.state.counter + 1
      })
     } 
  render() {
    return (
      <div>
        <h1>Class based component</h1>
        <h3 className="mx-3">{this.state.counter}</h3>
        <button className="btn btn-primary mx-3" onClick={this.updateCounter}>
          Update Counter
        </button>
        <p>{this.props.initial}</p>
      </div>
    );
  }
}

