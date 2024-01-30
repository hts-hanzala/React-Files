import React, { Component } from 'react'

export default class ClassBasedComponents extends Component {
    constructor(){
        super()
        this.state = {counter:1}
    }
  render() {
    return (
      <div>
        <h1>Class based component</h1>
      </div>
    )
  }
}

