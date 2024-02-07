import React, { Component } from 'react'

export default class UnmountingPhase extends Component {
    constructor(){
        super()
        this.state = {
            delete : false,
        }
    }
  render() {
    return (
      <div>
        <h1>Unmounting Phase</h1>
        <h2>Employee List</h2>
        <button className="btn btn-primary" onClick={()=>this.setState({delete:true})}>Delete</button>
        {this.state.delete ? null : <EmployeeList/>}
      </div>
    )
  }
}


class EmployeeList extends Component {
    componentWillUnmount(){
        alert('Employee Deleted Successfully')
    }
  render() {
    return (
      <div>
        <h3>Employee 1</h3>
        <h3>employee1@email.com</h3>
      </div>
    )
  }
}

