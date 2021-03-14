import React, { Component } from 'react'
import {Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';


export default class navvbar extends Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <Navbar.brand href="/">
                        <H1>
                            JustLogo
                        </H1>
                    </Navbar.brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/About">ABOUT US</Nav.Link>
                            <Nav.Link href="/Users">USERS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        )
    }
}
