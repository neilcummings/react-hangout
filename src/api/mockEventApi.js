import delay from './delay';
import cuid from 'cuid';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const events = [
    {
        id: 1,
        title: 'The First Amazing event',
        hostedBy: 'Rebecca',
        hostedByAvatar: 'https://placeimg.com/100/100/people',
        description: 'This will be the first event hosted at the hangout club',
        eventDate: new Date("2018-02-25T18:00:00Z"),
        location: 'London',
        venue: 'The Pub',
        attendees: []
    },
    {
        id: 2,
        title: 'The Second Amazing event',
        hostedBy: 'Tom',
        hostedByAvatar: 'https://placeimg.com/100/100/people',
        description: 'This will be the first event hosted at the hangout club',
        eventDate: new Date("2018-02-26T18:00:00Z"),
        location: 'London',
        venue: 'The Other Pub',
        attendees: []
    },

];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

class EventApi {
    static getAllEvents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], events));
            }, delay);
        });
    }

    static saveEvent(event) {
        event = Object.assign({}, event); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minEventTitleLength = 1;
                if (event.title.length < minEventTitleLength) {
                    reject(`Title must be at least ${minEventTitleLength} characters.`);
                }

                if (event.id) {
                    const existingEventIndex = events.findIndex(a => a.id === event.id);
                    events.splice(existingEventIndex, 1, event);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    event.id = cuid();
                    event.push(event);
                }

                resolve(event);
            }, delay);
        });
    }

    static deleteEvent(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfEventToDelete = events.findIndex(event => {
                    event.id === eventId;
                });
                events.splice(indexOfEventToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default EventApi;
