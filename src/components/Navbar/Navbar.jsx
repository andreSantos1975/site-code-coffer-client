import React from 'react';
import Container from 'react-bootstrap/Container';
import logoImage from '../../../public/img/logo.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export const NavbarComponent = ({ logado, setLogado, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Realize a lógica de "Sign Out" aqui, como limpar o estado, remover tokens de autenticação, etc.
    setLogado(false);
    onSignOut();
    navigate('/login');
  };

  const renderLoginButton = () => {
    if (logado) {
      return (
        <Button variant="primary" className="btn-extra-small btn-rounded" style={{ backgroundColor: 'rgb(42, 42, 21)', marginRight: '10px' }} onClick={handleSignOut}>Sair</Button>
      );
    } else {
      return (
        <Link to="/login">
          <Button variant="warning" className="btn-extra-small btn-rounded" style={{ backgroundColor: 'rgb(42, 42, 21)', marginRight: '10px' }}>Entrar</Button>
        </Link>

      );
    }
  };

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
            <Nav.Link as={Link} to="/prices" className="nav-link-styled">Preços</Nav.Link>
            <Nav.Link as={Link} to="/prices" className="nav-link-styled">Cursos</Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link-styled">Blog</Nav.Link>
            {/*<Nav.Link as={Link} to="/pricing3" className="nav-link-styled">preços</Nav.Link>*/}
            {/*<Nav.Link as={Link} to="/pricing3" className="nav-link-styled">preços</Nav.Link>*/}
            <Nav.Link className="ml-auto">
            </Nav.Link>
          </Nav>


          {renderLoginButton()}

        </Container>
      </Navbar>
    </div>
  );
}
