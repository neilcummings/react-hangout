import React, {Component} from 'react';
import { Form, Segment } from 'semantic-ui-react';

class EventForm extends Component {
    state = {
        fields: {
            title: '',
            hostedBy: '',
            hostedByAvatar: '',
            description: '',
            location: '',
        }
    };


    onInputChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    };

    onFormSubmit = () => {
        const newEvent = this.state.event;
        this.setState(prevState => ({
            events: [...prevState.events, newEvent],
            event: {title: '', hostedBy: ''}
        }))
    };

    render() {
        return (
            <Segment>
                <Form>
                    <Form.Field
                        name="title"
                        width={16}
                        placeholder="Title"
                        control="input"
                        onChange={this.onInputChange}
                        value={this.state.fields.title}
                    />
                    <Form.Field
                        name="hostedBy"
                        width={16}
                        placeholder="Hosted By"
                        control="input"
                        onChange={this.onInputChange}
                        value={this.state.fields.hostedBy}
                    />
                    <input type="submit" value='Save' onClick={this.onFormSubmit}/>
                </Form>
            </Segment>
        );
    }
}

export default EventForm;
