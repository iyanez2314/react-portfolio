import React from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';


function Navigation () {
    return (
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action2">Github</Nav.Link>
        <Nav.Link href="#action2">LinkedIn</Nav.Link>
        <Nav.Link href="#action2">Contact me</Nav.Link>
        <Nav.Link href="#action2">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;


