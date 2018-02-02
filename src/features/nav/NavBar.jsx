import React from 'react'
import {NavLink} from "react-router-dom";
import {Menu, Container, Button} from 'semantic-ui-react';

const NavBar = () => {
    const style = {active: 'active'};
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header={true}>
                    <img src="assets/logo.svg" alt="logo"/>
                    Hangout Club
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' activeStyle={style} name='Events'/>
                <Menu.Item as={NavLink} to='/people' activeStyle={style} name='People'/>
                <Menu.Item position='right'>
                    <Button basic inverted>Login</Button>
                    <Button basic inverted>Sign Out</Button>
                </Menu.Item>
                <Menu.Item/>
            </Container>
        </Menu>
    )
}

export default NavBar