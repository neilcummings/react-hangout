import React, {Component} from 'react';
import {Route} from "react-router-dom";
import { Grid } from 'semantic-ui-react';

import NavBar from 'features/nav/NavBar';
import HomePage from 'features/home/HomePage';
import EventsDashboard from 'features/event/EventsDashboard';
import PeopleDashboard from 'features/people/PeopleDashboard';


class App extends Component {
    render() {
        return (
            <Grid stackable container className="main">
                <div>
                    <NavBar/>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/events' component={EventsDashboard}/>
                    <Route path='/people' component={PeopleDashboard}/>
                </div>
            </Grid>
        );
    }
}

export default App;
