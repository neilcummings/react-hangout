import React, {Component} from 'react';
import EventsListItem from "./EventsListItem";
import cuid from 'cuid';
import {Grid, Button} from 'semantic-ui-react';
import EventForm from "./EventForm";

const events = [
    {
        id: 1,
        title: 'The amazing event',
        hostedBy: 'Bob',
        hostedByAvatar: 'https://placeimg.com/100/100/people',
        description: 'A wonderful evening in the pub',
        location: 'London'
    },
    {
        id: 2,
        title: 'Another amazing event',
        hostedBy: 'Bob',
        hostedByAvatar: 'https://placeimg.com/100/100/people',
        description: 'A wonderful evening in the pub',
        location: 'London'
    }
];

class EventsDashboard extends Component {
    state = {
        events: events,
        isFormOpen: false
    };


    eventsRow(event, index) {
        return (
            <EventsListItem key={event.id} event={event}/>
        );
    }

    handleOpenEventForm = () => {
        this.setState({
            isFormOpen: true
        })
    };

    handleCloseEventForm = () => {
        this.setState({
            isFormOpen: false
        })
    };

    handleCreateFormSubmit = (event) => {
        this.createEvent(event);
        this.handleCloseEventForm();
    };

    createEvent = (event) => {
        event.id = cuid();
        this.setState({
            events: this.state.events.concat(event)
        });
    };

    render() {
        return (
            <Grid stackable container className="main">
                <Grid.Column width={10}>
                    {this.state.events.map(this.eventsRow)}
                </Grid.Column>
                <Grid.Column width={6}>
                    {!this.state.isFormOpen &&
                    <Button positive inverted content='Create Event' onClick={this.handleOpenEventForm}/>
                    }
                    {this.state.isFormOpen &&
                        <EventForm
                            onFormClose={this.handleCloseEventForm}
                            onFormSubmit={this.handleCreateFormSubmit}
                        />}
                </Grid.Column>

            </Grid>
        );
    }
}

export default EventsDashboard;
