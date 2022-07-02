import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';
import styles from './Navse.module.css';

const Navse = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Logo/>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
          <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/ff">Latest Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/fff">Feature Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/ffff">FAQs</NavLink>
    </Nav>
    <Nav>
      <NavLink className={styles.loginHeader} to="/login">Login</NavLink>
      <NavLink className={styles.headerSubscribe} to="/">Subscribe</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navse;