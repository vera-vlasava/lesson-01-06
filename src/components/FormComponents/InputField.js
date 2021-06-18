import React from "react";

const InputField = ({ label, id, error, ...rest }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" id={id} {...rest} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputField;
