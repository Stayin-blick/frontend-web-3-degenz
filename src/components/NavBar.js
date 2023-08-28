import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assests/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContext'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedOutIcons = (
    <>
        <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="signin"
        >
            <i class="fa-solid fa-right-to-bracket"></i>Sign In
        </NavLink>
        <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signup"
        >
            <i class="fas fa-user-plus"></i>Sign Up
        </NavLink>
    </>
    );
    const loggedInIcons = <>{currentUser?.username}</>

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/" >
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink
                        exact
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        to="/"
                    >
                        <i class="fa-solid fa-house"></i>Home
                    </NavLink>
                    {currentUser ? loggedInIcons : loggedOutIcons}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavBar;