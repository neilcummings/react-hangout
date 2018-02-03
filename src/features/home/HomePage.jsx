import React, {Component} from 'react';

import SampleComponent from 'SampleComponent';


class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <SampleComponent/>
            </div>
        );
    }
}

export default HomePage;
