import React, { useState, useRef } from "react";

export default function Forms() {
  const [userName, setUserName] = useState("");
  const nameRef = useRef('')
  const formSubmit = (e) => {
    e.preventDefault()
    const inputValue = nameRef.current.value
    console.log(inputValue)
  }
  return (
    <div>
      <h1>Form Functional</h1>
      <form action="">
        {/* Controlled */}
        <label htmlFor="">
          Username :
          <input
            type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </label>
        {/* {console.log(userName)} */}
        {/* Uncontrolled */}
        {/* <input type="text" ref={nameRef} /> */}
        <button className="btn btn-primary" onClick={formSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export class FormsClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleSubmit = () => {
    const inputValue = this.inputRef.current.value
    console.log(inputValue)
  }
  render() {
    return (
      <div>
        <h1>Form Class</h1>
        <input type="text" ref={this.inputRef} />
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

