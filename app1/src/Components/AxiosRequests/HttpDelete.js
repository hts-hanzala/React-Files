import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HttpDelete() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:4000/data/${id}`)
      .then((res) => {
        const deletedData = res.data;
        setEmployee((prevEmployee) =>
          prevEmployee.filter((employee)=>employee.id !== deletedData.id)
        );
        alert(`Employee with ID ${id} has been deleted successfully.`);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Occurred");
      });
  };
  return (
    <div>
      <h1>Http Delete Request</h1>
      {employee.length > 0 ? (
        <table style={{ width: "60%" }} className="table table-bordered">
          <thead>
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.personN}</td>
                <td>{employee.place}</td>
                <td>{employee.designation}</td>
                <td>
                  <button onClick={() => deleteData(employee.id)}>
                    <i className="fa fa-trash">Delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>NO Record Found.</div>
      )}
    </div>
  );
}
