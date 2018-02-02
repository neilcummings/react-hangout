import React from 'react';
import { Segment, Button, Item, Icon, Image, List } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const EventListItem = ({event={}}) => {
    const {
        id = '',
        title = '',
        hostedBy = '',
        hostedByAvatar = '',
        description = '',
        location = ''
    } = event;

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size="tiny"
                            circular={true}
                            src={hostedByAvatar}
                        />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as="a">{title}</Item.Header>
                            <Item.Description>
                                Hosted by <a>{hostedBy}</a>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
        <span>
          <Icon name="clock" /> Today |
          <Icon name="marker" /> {location}
        </span>
            </Segment>
            <Segment secondary>
                <List horizontal={true}>
                    <List.Item>
                        <Image
                            size="mini"
                            avatar={true}
                            src="http://placeimg.com/100/100/animals"
                        />
                    </List.Item>
                </List>
            </Segment>
            <Segment clearing={true}>
                {description}, {id}
                <Button as={Link} to={{pathname: '/event/' + id, state: {event: event} }} color="teal" floated="right" content="View" />
            </Segment>
        </Segment.Group>
    );
};

export default EventListItem;