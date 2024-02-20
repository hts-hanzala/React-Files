import React, { useState } from "react";
import axios from "axios";

export default function HttpPost() {
  const [state, setState] = useState({
    personN: "",
    place: "",
    designation: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/data", state)
      .then((res) => {
        setState("");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Can't Post", err);
      });
  };
  return (
    <div>
      <h1>Http Post Request</h1>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <h1>Data Form</h1>
        <div className="form-control">
          <label>
            Name :
            <input
              type="text"
              name="personN"
              value={state.personN}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Place :
            <input
              type="text"
              name="place"
              value={state.place}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Designation :
            <input
              type="text"
              name="designation"
              value={state.designation}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
