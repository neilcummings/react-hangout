import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'app/layout/App.css';
import App from 'app/layout/App';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Router>
            <App/>
        </Router>,
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

