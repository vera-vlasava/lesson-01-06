import React, { useState } from "react";
import { connect } from "react-redux";
import { editPerson } from "../../store/actions/act_persons";
import { CHANGE_EDIT_MODE } from "../../store/typesList";

const EditPersonForm = ({ person, editLocalPerson, setEditMode }) => {
  const [formData, setFormData] = useState(person);

  const changeFieldHandle = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitFormHandle = (event) => {
    event.preventDefault();
    editLocalPerson(formData);
    setEditMode();
  };

  return (
    <form onSubmit={submitFormHandle}>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.fName}
          name="fName"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.lName}
          name="lName"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="text"
          className="form-control"
          value={formData.age}
          name="age"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          value={formData.email}
          name="email"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          value={formData.phone}
          name="phone"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group mb-2">
        <label>Avatar</label>
        <input
          type="text"
          className="form-control"
          value={formData.avatar}
          name="avatar"
          onChange={changeFieldHandle}
        />
      </div>
      <button type="submit">Save Change</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editLocalPerson: (person) => dispatch(editPerson(person)),
    setEditMode: () => dispatch({ type: CHANGE_EDIT_MODE }),
  };
};

export default connect(null, mapDispatchToProps)(EditPersonForm);
