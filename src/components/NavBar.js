import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assests/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from "axios";
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };
    
    const addPostIcon = (
        <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i class="fa-solid fa-plus"></i>Add post
        </NavLink>
    )
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
    const loggedInIcons = <>
        <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
        >
            <i class="fas fa-stream"></i>Feed
        </NavLink>
        <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
        >
            <i class="fas fa-heart"></i>Liked
        </NavLink>
        <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/followers"
        >
            <i class="fa-solid fa-person-circle-plus"></i>Followers
        </NavLink>
        <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/communities"
        >
            <i class="fa-solid fa-people-group"></i>Communities
        </NavLink>
        <NavLink 
            className={styles.NavLink}
            to="/"
            onClick={handleSignOut}
        >
            <i class="fa-solid fa-right-from-bracket"></i>Sign Out
        </NavLink>
        <NavLink 
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text="profile" height={40} />
        </NavLink>
    </>

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/" >
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
            </NavLink>
            {currentUser && addPostIcon}
            <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
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