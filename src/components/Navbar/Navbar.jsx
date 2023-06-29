import React from 'react';
import Container from 'react-bootstrap/Container';
import logoImage from '../../../public/img/logo.jpg';
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
              <img src={logoImage} alt="Logo" className='logo-img' />
            </Link>
          </Navbar.Brand>
          <Nav className="centered-links">
            <Nav.Link as={Link} to="/" className="nav-link-styled">Lar</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-styled">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/features2" className="nav-link-styled">Menu</Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="nav-link-styled">preços</Nav.Link>
            <Nav.Link as={Link} to="/pricing2" className="nav-link-styled">preços</Nav.Link>
            {/*<Nav.Link as={Link} to="/pricing3" className="nav-link-styled">preços</Nav.Link>*/}
            <Nav.Link className="ml-auto">
            </Nav.Link>
          </Nav>
          <Button variant="warning" className="btn-extra-small btn-rounded" style={{ marginRight: '50px' }}>Cadastro</Button>
        </Container>
      </Navbar>
    </div>
  );
}
