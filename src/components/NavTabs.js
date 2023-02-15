import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='nav'>
          <Navbar.Brand href="/react-portfolio/#/About" className='nav'>Katie Kim</Navbar.Brand>
          <Nav className="me-auto nav">
            <Nav.Link href="/react-portfolio/#/About" className='nav'>About</Nav.Link>
            <Nav.Link href="/react-portfolio/#/Portfolio" className='nav'>Portfolio</Nav.Link>
            <Nav.Link href="/react-portfolio/#/Contact" className='nav'>Contact</Nav.Link>
            <Nav.Link href="/react-portfolio/#/Resume" className='nav'>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;