import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddNewPerson from "../components/Auth/AddNewPerson";
import Home from "../components/Home/Home";
import Persons from "../components/Persons/Persons";
import PersonProfile from "../components/Persons/PersonProfile";
import Albums from "../components/Albums/Albums";
import Album from "../components/Albums/Album";
import SignIn from "../components/Auth/SignIn";

const Pages = () => {
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route exact={true} path="/persons">
                <Persons />
            </Route>
            <Route path="/signup">
                <AddNewPerson />
            </Route>
            <Route path="/signin">
                <SignIn />
            </Route>
            <Route path="/persons/:id">
                <PersonProfile />
            </Route>
            <Route exact path="/albums">
                <Albums />
            </Route>
            <Route path="/albums/:id">
                <Album />
            </Route>
        </Switch>
    )
}

export default Pages