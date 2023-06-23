import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./NavAbout.css";

function NavAbout() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-head1' variant="dark">
      <Container>
        <Navbar.Brand>Credit Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <p><Link to="/home" className='about-link-about'>Home</Link></p>
            <p><Link to="/about" className='about-link-about'>About</Link></p>
            <NavDropdown title="Card Provides" id="collasible-nav-dropdown" className='about-link-about'>
              <NavDropdown.Item >Axis Bank</NavDropdown.Item>
              <NavDropdown.Item >Au Bank
              </NavDropdown.Item>
              <NavDropdown.Item >IndusInd Bank</NavDropdown.Item>
            </NavDropdown>
            <p ><Link to="/blog" className='about-link-about'>Blog</Link></p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavAbout;