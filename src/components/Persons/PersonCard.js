import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePerson } from "../../store/actions/act_persons";

const PersonCard = ({ person, deleteItem, activePersonId }) => {
  let history = useHistory();
  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/persons/${person.id}`);
  };

  const deleteHandle = (event) => {
    event.preventDefault();
    deleteItem(person.id);
  };

  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card">
        <img
          src={person.avatar}
          className="card-img-top"
          alt="{person.f_name} {person.l_name}"
        />
        <div className="card-body">
          <h5 className="card-title">
            {person.f_name} {person.l_name}
          </h5>
          <a href="#" onClick={clickHandle} className="btn btn-primary">
            Open profile
          </a>
          {activePersonId === person.id && 1 === 2 ? (
            <a href="#" onClick={deleteHandle} className="btn btn-danger">
              Delete
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (personId) => dispatch(deletePerson(personId)),
  };
};

const mapStateToProps = (state) => {
  return {
    activePersonId: state.persons.activePerson,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
