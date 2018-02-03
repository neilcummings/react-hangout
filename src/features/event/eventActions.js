import {LOAD_EVENTS_SUCCESS} from './eventConstants';
import eventApi from '../../api/mockEventApi';

export function loadEvents() {
    return (dispatch) => {
        eventApi.getAllEvents()
            .then(data => {
                dispatch({
                    type: LOAD_EVENTS_SUCCESS,
                    payload: data
                })
            })
    }
}