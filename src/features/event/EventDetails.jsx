import React, {Component} from 'react';
import {Grid, Segment, Image, Item, Header, Button, Icon, Comment, Form} from 'semantic-ui-react';


class EventDetails extends Component {
    render() {

        const eventImageStyle = {
            filter: 'brightness(30%)'
        };

        const eventImageTextStyle = {
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            width: '100%',
            height: 'auto',
            color: 'white'
        };

        const {event} = this.props.location.state;
        console.log('in event details not the form');

        return (
            <Grid className='main' container>
                <Grid.Column width={10}>
                    <Segment basic attached style={{padding: '0'}}>
                        <Image src='http://placeimg.com/750/300/arch/4' fluid style={eventImageStyle}/>
                        <div style={eventImageTextStyle}>
                            <Segment basic>
                                <Item.Group>
                                    <Item>
                                        <Item.Content>
                                            <Header size='huge' content={event.title} style={{color: 'white'}}/>
                                            <p>Wednesday 18 January - 6.30 PM</p>
                                            <p>Hosted by <strong>{event.hostedBy}</strong></p>
                                            <p>{event.id}</p>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Segment>
                        </div>
                    </Segment>

                    <Segment attached>
                        <Button color='teal'>JOIN THIS EVENT</Button>
                    </Segment>

                    <Segment attached='top'>
                        <Grid>
                            <Grid.Column width={1}>
                                <Icon size='large' color='teal' name='info'/>
                            </Grid.Column>
                            <Grid.Column width={15}>
                                <p>
                                    Come for a social session after work with us for drinks, and food if you're hungry,
                                    at a popular Angel pub and a chance to
                                    have fun, relax and let your hair down with a new and friendly crowd. And if you're
                                    up for helping
                                    the group meet up, hit the green button, post your meet-up instructions on the chat
                                    and get loads
                                    of love and maybe a free drink or two from your fellow guests! :)</p>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Segment attached>
                        <Grid>
                            <Grid.Column width={1}>
                                <Icon name='marker' size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column width={15}>
                                <p>Map of location to go here</p>
                            </Grid.Column>
                        </Grid>
                    </Segment>

                    <Segment textAlign='center' attached='top' inverted color='teal' style={{border: 'none'}}>
                        <Header>Chat about this event</Header>
                    </Segment>

                    <Segment attached>
                        <Comment.Group threaded>

                            <Comment>
                                <Comment.Avatar as='a' src='http://placeimg.com/100/100/people'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Matt</Comment.Author>
                                    <Comment.Metadata>
                                        <span>Today at 5:42PM</span>
                                    </Comment.Metadata>
                                    <Comment.Text>How artistic!</Comment.Text>
                                    <Comment.Actions>
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>

                            <Comment>
                                <Comment.Avatar as='a' src='http://placeimg.com/100/100/people'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                    <Comment.Metadata>
                                        <span>Yesterday at 12:30AM</span>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <p>This has been very useful for my research. Thanks as well!</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar as='a' src='http://placeimg.com/100/100/people'/>
                                        <Comment.Content>
                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                            <Comment.Metadata>
                                                <span>Just now</span>
                                            </Comment.Metadata>
                                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                            <Comment.Actions>
                                                <a>Reply</a>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            </Comment>

                            <Comment>
                                <Comment.Avatar as='a' src='http://placeimg.com/100/100/people'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                    <Comment.Metadata>
                                        <span>5 days ago</span>
                                    </Comment.Metadata>
                                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                    <Comment.Actions>
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>

                            <Form reply>
                                <Form.TextArea/>
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                            </Form>
                        </Comment.Group>
                    </Segment>

                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDetails;

