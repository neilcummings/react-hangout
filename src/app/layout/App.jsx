import React, {Component} from 'react';
import {Route} from "react-router-dom";

import NavBar from 'features/nav/NavBar';
import HomePage from 'features/home/HomePage';
import EventDetails from 'features/event/EventDetails';
import EventsDashboard from 'features/event/EventsDashboard';
import PeopleDashboard from 'features/people/PeopleDashboard';
import EventForm from "../../features/event/EventForm";
import {Grid} from "semantic-ui-react";


class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Grid stackable container className="main">
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/events' component={EventsDashboard}/>
                    <Route path='/people' component={PeopleDashboard}/>
                    <Route path='/event/:id' component={EventDetails}/>
                    <Route exact path='/createEvent' component={EventForm}/>
                </Grid>
            </div>
        );
    }
}

export default App;
