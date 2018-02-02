import React, {Component} from 'react';
import EventsListItem from "./EventsListItem";
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
        events: events
    };


    eventsRow(event, index) {
        return (
            <EventsListItem key={index} event={event}/>
        );
    }

    render() {
        return (
            <Grid stackable container className="main">
                <Grid.Column width={10}>
                    {this.state.events.map(this.eventsRow)}
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventForm/>
                </Grid.Column>

            </Grid>
        );
    }
}

export default EventsDashboard;
