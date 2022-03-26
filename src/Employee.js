import React, { useState } from "react";

const Employee = () => {
  const [user, setUser] = useState([]);
  const [name, pickName] = useState("");
  const [age, pickAge] = useState("");

  const save = (e) => {
    e.preventDefault();
    var newUser = { name: name, age: age };
    setUser((user) => user.concat(newUser));
    // clear textbox
    pickName("");
    pickAge("");
  };

 // clear input fields
  const Reset = () => {
    document.getElementById("name").value =" ";
    document.getElementById("age").value = " ";
   };

  // delete perticuler index
  const Delete = (index) => {
    user.splice(index, 1);
    setUser((user) => [...user]);
  };

  // clear all the data from table 
  const ClearAll = () => {
    var tb = document.getElementById("remove");
    while (tb.rows.length > 0) {
      tb.deleteRow(1);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row ">
        <h2 className="text-center mb-5 bg-dark text-white py-2"> ToDo </h2>
        <div className="col-lg-5 mx-auto">
          <div className="input-field">
            <form id="myform">
              <label> Full Name </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="form-control"
                onChange={(obj) => pickName(obj.target.value)}
                value={name}
              />
              <label> Age </label>
              <input
                type="number"
                id="age"
                placeholder="Enter Age"
                className="form-control"
                onChange={(obj) => pickAge(obj.target.value)}
                value={age}
              />
              <div className="buttons">
                <button id="btn1" onClick={save}> Save </button>
                <button id="btn2" onClick={Reset}> Clear </button>
              </div>
            </form>
          </div>
        </div> 

        <div className="col-lg-5 mx-auto">
          <div className="result">
            <h3> Users </h3>
            <table className="table" id="remove">
              <thead className="bg-dark text-white">
                <tr>
                  <th> Full name </th>
                  <th> Marks </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {user.map((details, index) => {
                  return (
                    <tr key={index} className="mt-4">
                      <td> {details.name} </td>
                      <td> {details.age}</td>
                      <td>
                        <a className="clr" onClick={Delete.bind(this, index)}> clear </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="btn-clear">
              <button className="btn btn-dark" onClick={ClearAll}> CLEAR ALL </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
