import CountStore from "./Components/CountStore";
import CountActions from "./Components/CountActions";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = this.fromStores()
  }
  componentDidMount(){
    CountStore.addChangeListener(this.handleClick)
  }
  fromStores(){
    return{
      count : CountStore.getCount()
    }
  }
  handleClick(){
    this.setState(this.fromStores())
  }
  increment = () => {
    CountActions.Increment()
  }
  decrement = () => {
    CountActions.Decrement()
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>Counter : {this.state.count}</p>
      </div>
    )
  }
}

