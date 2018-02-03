import {combineReducers} from 'redux';
import events from '../../features/event/eventReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({
    test: testReducer,
    events
});

export default rootReducer;