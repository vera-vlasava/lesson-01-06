import React, { useState } from "react";
import { connect } from "react-redux";
import { addPhoto } from "../../store/actions/act_photos";

const AddPhoto = ({ album_id, addLocalPhoto }) => {
  const [photo, setPhoto] = useState({
    album_id,
    title: "",
    src: "",
  });

  const changeHandle = (event) => {
    setPhoto({ ...photo, [event.target.name]: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    addLocalPhoto(photo);
    setPhoto({
      album_id,
      title: "",
      src: "",
    });
  };

  return (
    <form onSubmit={submitHandle}>
      <div className="form-group mb-2">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={photo.title}
          onChange={changeHandle}
        />
      </div>
      <div className="form-group mb-2">
        <label>SRC</label>
        <input
          type="text"
          className="form-control"
          name="src"
          value={photo.src}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addLocalPhoto: (photo) => dispatch(addPhoto(photo)),
  };
};

export default connect(null, mapDispatchToProps)(AddPhoto);
