import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";

const AddAlbum = ({ onFinish, activePerson }) => {
  const [formData, setFormData] = useState({
    personId: activePerson,
    title: "",
  });

  const changeHandle = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFinish(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group mb-2">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={changeHandle}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary w-100">
          Add
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
  };
};

export default connect(mapStateToProps, null)(AddAlbum);
