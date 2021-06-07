import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewPerson } from "../../store/actions/act_persons";

const AddNewPerson = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    age: "",
    email: "",
    phone: "",
    avatar: "",
  });

  let history = useHistory();

  const changeFieldHandle = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    addPerson(formData);
    history.push("/persons");
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <form onSubmit={submitHandle}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="fName"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lName"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group mb-2">
            <label>Avatar</label>
            <input
              type="text"
              className="form-control"
              name="avatar"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (person) => dispatch(addNewPerson(person)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewPerson);
