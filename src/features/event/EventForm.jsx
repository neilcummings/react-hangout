import React, {Component} from 'react';
import {Form} from 'formsy-semantic-ui-react';
import {Button, Grid, Label, Segment, Step, Dimmer, Loader} from 'semantic-ui-react';
import _ from 'lodash';

const categories = [
    {text: 'Drinks', value: 'drinks'},
    {text: 'Music', value: 'music'},
    {text: 'Culture', value: 'culture'},
    {text: 'Nightlife', value: 'nightlife'},
    {text: 'Film', value: 'film'},
];

const hours = _.times(12, i => (
    {value: i + 1, text: i + 1}
));

const minutes = [
    {text: '00', value: '00'},
    {text: '15', value: '15'},
    {text: '30', value: '30'},
    {text: '45', value: '45'},
];

class EventForm extends Component {
    state = {
        fields: {
            title: this.props.title || '',
            hostedBy: this.props.hostedBy || '',
            hostedByAvatar: this.props.hostedByAvatar || '',
            description: this.props.description || '',
            city: this.props.city || '',
            venue: this.props.venue || '',
            date: this.props.date || '',
            timeHours: this.props.timeHours || '',
            timeMinutes: this.props.timeMinutes || '',
            timeAmPm: this.props.timeAmPm
        },
        buttonDisabled: true,
        stepOneComplete: false,
        saving: false
    };


    onInputChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    };

    onFormSubmit = (e) => {
        this.setState({saving: true});
        e.preventDefault();
        this.location.state.handleSubmit(this.state.fields);
        this.setState({saving: false});
        this.props.history.push('/events');
    };

    formIsValid = () => {
        this.setState({
            buttonDisabled: false,
            stepOneComplete: true
        })
    };

    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    };

    render() {

        const submitText = this.props.id ? 'Update Event' : 'Create Event';

        return (
            <Grid stackable container className="main">
                <Grid.Column width={10}>
                    <Step.Group fluid ordered>
                        <Step
                            title="What do you want to do?"
                            description="Tell people about your event"
                            completed={this.state.stepOneComplete}
                        />
                        <Step title="Who do you want to do it with?"
                              description="Define who you want to come to your event"
                        />
                    </Step.Group>

                    <Segment clearing>
                        <Dimmer active={this.state.saving}>
                            <Loader>Saving</Loader>
                        </Dimmer>
                        <Form className="ui form" onValidSubmit={this.onFormSubmit} onValid={this.formIsValid}>
                            <div className="ui teal sub header">Event Details</div>
                            <Form.Input
                                required
                                label="Event title"
                                placeholder="Give your event a name"
                                name="title"
                                value={this.state.fields.title}
                                onChange={this.onInputChange}
                                errorLabel={<Label color="red" pointing/>}
                                validationErrors={{isDefaultRequiredValue: 'Event title is required'}}
                                passRequiredToField={false}
                            />

                            <Form.Dropdown
                                multiple={true}
                                selection={true}
                                required
                                options={categories}
                                value={this.state.fields.categories}
                                onChange={this.onInputChange}
                                name="eventCategories"
                                label="What is your event about?"
                                placeholder="Select your event category"
                                errorLabel={<Label color="red" pointing/>}
                                validationErrors={{isDefaultRequiredValue: 'You must select at least one category'}}
                                passRequiredToField={false}
                            />

                            <Form.TextArea
                                autoHeight
                                required
                                label="Tell us about your planned event"
                                name="description"
                                value={this.state.fields.description}
                                onChange={this.onInputChange}
                                errorLabel={<Label color="red"/>}
                                validationErrors={{isDefaultRequiredValue: 'The event description is required'}}
                                passRequiredToField={false}
                            />

                            <div className="ui divider"/>
                            <div className="ui teal sub header">Event Location Details</div>
                            <Form.Input
                                name="city"
                                placeholder="City"
                                required
                                value={this.state.fields.value}
                                errorLabel={<Label color="red" pointing/>}
                                validationErrors={{isDefaultRequiredValue: 'The city is required'}}
                                passRequiredToField={false}
                            />
                            <Form.Input
                                name="venue"
                                placeholder="Venue"
                                required
                                value={this.state.fields.venue}
                                errorLabel={<Label color="red" pointing/>}
                                validationErrors={{isDefaultRequiredValue: 'The city is required'}}
                                passRequiredToField={false}
                            />
                            <Form.Group>
                                <Form.Input
                                    name="eventDate"
                                    type='date'
                                    required
                                    value={this.state.fields.date}
                                    errorLabel={<Label color="red" pointing/>}
                                    validationErrors={{isDefaultRequiredValue: 'The Event date is required'}}
                                    passRequiredToField={false}
                                />
                                <Form.Select
                                    name="eventTimeHours"
                                    options={hours}
                                    fluid={true}
                                    value={this.state.fields.timeHours}
                                    defaultValue={6}
                                    upward={true}
                                />
                                <Form.Select name="eventTimeMinutes"
                                             options={minutes}
                                             fluid={true}
                                             value={this.state.fields.timeMinutes}
                                             upward={true}/>
                                <Form.Select
                                    options={[
                                        {key: 'PM', text: 'PM', value: 'PM'},
                                        {key: 'AM', text: 'AM', value: 'AM'}
                                    ]}
                                    name="eventTimeAmPm"
                                    fluid={true}
                                    value={this.state.fields.timeAmPm}
                                    upward={true}
                                />
                            </Form.Group>

                            <Button onClick={this.handleCancel}>Cancel</Button>

                            <Button content={submitText}
                                    disabled={this.state.buttonDisabled}
                                    onClick={this.props.handleSubmit}
                                    positive
                                    floated="right"/>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventForm;
