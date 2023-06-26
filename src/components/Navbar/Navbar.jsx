import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" variant="light" className="shadow fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/img/logo.jpg'} alt="Logo" className='logo-img' />
            </Link>
          </Navbar.Brand>
          <Nav className="centered-links">
            <Nav.Link>
              <Link to="/" className="nav-link-styled">Lar</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link-styled">Sobre</Link>
            </Nav.Link>
            <Nav.Link href="#features2">
              <a href="#" className="nav-link-styled">Menu</a>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <a href="#" className="nav-link-styled">preços</a>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <a href="#" className="nav-link-styled">Blog</a>
            </Nav.Link>
            {/*<Nav.Link href="#login">
              <a href="#" className="nav-link-styled">Login</a>
            </Nav.Link>*/}
            <Nav.Link className="ml-auto">
            </Nav.Link>
          </Nav>
          <Button variant="warning" className="btn-extra-small btn-rounded" style={{ marginRight: '50px' }}>Cadastro</Button>
        </Container>
      </Navbar>
    </div>
  );
}