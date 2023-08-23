import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assests/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
        <Container>
            <Navbar.Brand>
                <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <Nav.Link>
                        <i class="fa-solid fa-house"style={{ color: '#71c3fa' }}></i>Home
                    </Nav.Link>
                    <Nav.Link>
                        <i class="fa-solid fa-right-to-bracket"style={{ color: '#71c3fa' }}></i>Sign In
                    </Nav.Link>
                    <Nav.Link>
                        <i class="fa-solid fa-user-plus"style={{ color: '#71c3fa' }}></i>Sign Up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavBar;