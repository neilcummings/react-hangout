import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventsListItem from "./EventsListItem";
import cuid from 'cuid';
import {Grid, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";

// const events = [
//     {
//         id: 1,
//         title: 'The amazing event',
//         hostedBy: 'Bob',
//         hostedByAvatar: 'http://placeimg.com/100/100/people',
//         description: 'A wonderful evening in the pub',
//         location: 'London'
//     },
//     {
//         id: 2,
//         title: 'Another amazing event',
//         hostedBy: 'Bob',
//         hostedByAvatar: 'http://placeimg.com/100/100/people',
//         description: 'A wonderful evening in the pub',
//         location: 'London'
//     }
// ];

const mapState = state => ({
    events: state.events
});

class EventsDashboard extends Component {
    state = {
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
        // this.createEvent(event);
        event.id = cuid();
        this.setState({
            events: this.state.events.concat(event)
        });
    };

    createEvent = (event) => {
        event.id = cuid();
        this.setState({
            events: this.state.events.concat(event)
        });
    };

    render() {
        const {events} = this.props;
        return (
            <Grid.Row>
                <Grid.Column width={10}>
                    <Button as={Link}
                            to={{pathname: '/createEvent', state: {handleSubmit: this.handleCreateFormSubmit}}}
                            positive
                            inverted
                            content='Create Event'/>
                    {events.map(this.eventsRow)}
                </Grid.Column>
                <Grid.Column width={6}>

                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default connect(mapState)(EventsDashboard);
