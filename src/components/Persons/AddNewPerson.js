import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewPerson } from "../../store/actions/act_persons";

import { useForm } from "react-cool-form";
import InputField from "../FormComponents/InputField";

const AddNewPerson = ({ addPerson }) => {
  let history = useHistory();

  const submitHandle = (values) => {
    addPerson(values);
    history.push("/persons");
  };

  const { form, use } = useForm({
    defaultValues: {
      fName: "",
      lName: "",
      age: "",
      email: "",
      phone: "",
      avatar: "",
    },

    onSubmit: (values) => submitHandle(values),
  });

  const errors = use("errors", { errorWithTouched: true });

  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <form ref={form} noValidate>
          <InputField
            type="text"
            name="fName"
            id="fName"
            label="First Name"
            required
            error={errors.fName}
          />
          <InputField
            type="text"
            name="lName"
            id="lName"
            label="Last Name"
            required
            error={errors.lName}
          />
          <InputField
            type="text"
            name="age"
            id="age"
            label="Age"
            required
            error={errors.age}
          />
          <InputField
            type="email"
            name="email"
            id="email"
            label="Email"
            required
            error={errors.email}
          />
          <InputField
            type="text"
            name="phone"
            id="phone"
            label="Phone"
            required
            error={errors.phone}
          />
          <InputField
            type="text"
            name="avatar"
            id="avatar"
            label="Avatar"
            required
            error={errors.avatar}
          />

          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
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
