import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'app/layout/App.css';
import App from 'app/layout/App';
import {loadEvents} from "./features/event/eventActions";
import configureStore from 'app/store/configureStore';

const store = configureStore();
store.dispatch(loadEvents());

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    // whenever the app or dependancies is changed, re-import the updated component and re-render it
    module.hot.accept('app/layout/App', () => {
        setTimeout(render);
    });
}

render();

