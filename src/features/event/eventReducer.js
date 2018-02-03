import {LOAD_EVENTS_SUCCESS} from "./eventConstants";
import initialState from '../../app/store/initialState';

export default function eventReducer(state = initialState.events, action) {
    switch(action.type) {
        case LOAD_EVENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}