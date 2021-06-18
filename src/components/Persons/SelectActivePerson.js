import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  changeActivePersonId,
  getPersons,
} from "../../store/actions/act_persons";

const SelectActivePerson = ({
  persons,
  activePerson,
  getPersonsObject,
  changeActivePerson,
}) => {
  
  
  useEffect(() => {
    getPersonsObject();
  }, []);

  const changeSelectValue = (event) => {
    changeActivePerson(+event.target.value);
  };

  return persons.length ? (
    <select onChange={changeSelectValue} defaultValue={activePerson || null}>
      <option value="-1">Choose User</option>
      {persons.map((p) => (
        <option key={p.id} value={p.id}>
          {p.fName} {p.lName}
        </option>
      ))}
    </select>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list,
    activePerson: state.persons.activePerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonsObject: () => dispatch(getPersons()),
    changeActivePerson: (newId) => dispatch(changeActivePersonId(newId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectActivePerson);
