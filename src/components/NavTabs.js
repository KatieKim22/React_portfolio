import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/react-portfolio/#/About">Katie Kim</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/react-portfolio/#/About">About</Nav.Link>
            <Nav.Link href="/react-portfolio/#/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/react-portfolio/#/Contact">Contact</Nav.Link>
            <Nav.Link href="/react-portfolio/#/Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;