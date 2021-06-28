import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import { CHANGE_ADD_POST } from "../../store/typesList";

import { addPost } from "../../store/actions/act_posts";

const AddPost = ({ activePerson, addLocalPost, setAddPostMode }) => {
  const [formData, setFormData] = useState({
    personId: activePerson,
    title: "",
    short: "",
    body: "",
  });

  const changeFieldHandle = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form
      onSubmit={() => {
        addLocalPost(formData);
        setAddPostMode();
      }}
    >
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group">
        <label>Short Text</label>
        <textarea
          className="form-control"
          name="short"
          onChange={changeFieldHandle}
        />
      </div>
      <div className="form-group">
        <label>Post text</label>
        <textarea
          className="form-control"
          name="body"
          onChange={changeFieldHandle}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    // activePerson: state.persons.activePerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddPostMode: () => dispatch({ type: CHANGE_ADD_POST }),
    addLocalPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
