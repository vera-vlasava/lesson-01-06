import React, {useContext} from "react"
import {GlobalContext} from "../App";
import PersonCard from "./PersonCard";

const Persons = () => {
    const {persons} = useContext(GlobalContext)

    const renderPersons = () => {
        if ( !persons.length ) {
            return (<div>Ups ...</div>)
        }
        return persons.map(person => (<PersonCard key={person.id} person={person} />))
    }

    return (
        <section className="container">
            <div className="row">
                {renderPersons()}
            </div>
        </section>
    )
}

export default Persons