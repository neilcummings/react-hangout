import React, {Component} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';

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

    onFormSubmit = (e) => {
        e.preventDefault();
        const newEvent = this.state.event;
        this.setState(prevState => ({
            events: [...prevState.events, newEvent],
            event: {title: '', hostedBy: ''}
        }));

    };

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.fields.title,
            hostedBy: this.state.fields.hostedBy
        })
    };

    render() {
        const submitText = this.props.id ? 'Update Event' : 'Create Event';
        const {onFormClose} = this.props;

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
                    <Button.Group attached='bottom'>
                        <Button basic color='blue' onClick={this.handleSubmit} content={submitText}/>
                        <Button basic color='red' onClick={onFormClose} content='Cancel'/>
                    </Button.Group>
                </Form>
            </Segment>
        );
    }
}

export default EventForm;
