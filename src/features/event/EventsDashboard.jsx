import React, {Component} from 'react';

const events = [
    {
        id: 1,
        title: 'The amazing event',
    },
    {
        id: 2,
        title: 'Another amazing event',
    }
];

class EventsDashboard extends Component {
    state = {
        event: {
            title: '',
            hostedBy: '',
            hostedByAvatar: '',
            description: '',
            location: '',
        },
        events: events
    };

    onTitleChange = (e) => {

        const event = this.state.event;
        event.title = e.target.value;
        this.setState({event: event});
    };

    onClickSave = () => {
        const newEvent = this.state.event;
        this.setState(prevState => ({
            events: [...prevState.events, newEvent],
            event: {title: ''}
        }))
    };

    eventsRow(event, index) {
        return <div key={index}>{event.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Events</h1>
                {this.state.events.map(this.eventsRow)}
                <h2>Add Event</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.event.title}/>
                <input type="submit" value='Save' onClick={this.onClickSave}/>
            </div>
        );
    }
}

export default EventsDashboard;
