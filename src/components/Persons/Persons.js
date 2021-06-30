import React, {useEffect} from "react";
import { connect } from "react-redux";
import PersonCard from "./PersonCard";
import {getPersons} from "../../store/actions/act_persons";

const Persons = ({ persons, getPersonsObject }) => {

  useEffect(() => {
    getPersonsObject();
  }, []);

  const renderPersons = () => {
    if (!persons.length) {
      return <div>Ups ...</div>;
    }
    return persons.map((person) => (
      <PersonCard key={person.id} person={person} />
    ));
  };

  return (
    <section className="container">
      <div className="row">{renderPersons()}</div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonsObject: () => dispatch(getPersons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
