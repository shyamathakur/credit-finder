import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./BlogNav.css";

function BlogNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-head1' variant="dark">
      <Container>
        <Navbar.Brand className='navbar-brand-blog' >Credit<span className='text-[black]'>Finder</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id='toggle-blog' />
        <Navbar.Collapse id="responsive-navbar-nav-blog">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <p className='blognav-manu text-[#1b70de]'><Link className='blog-link-blog' to="/home">Home</Link></p>
            <p className='blognav-manu text-[#1b70de]'><Link className='blog-link-blog' to="/about">About</Link></p>
            <NavDropdown title="Card Provides" id="collasible-nav-dropdown-blog" className='blog-link-blog text-[#1b70de]'>
              <NavDropdown.Item className='blognav-manu text-[#1b70de]'>Axis Bank</NavDropdown.Item>
              <NavDropdown.Item className='blognav-manu text-[#1b70de]'>Au Bank
              </NavDropdown.Item>
              <NavDropdown.Item className='blognav-manu text-[#1b70de]'>IndusInd Bank</NavDropdown.Item>
            </NavDropdown>
            <p className='blognav-manu text-[#1b70de]'><Link className='blog-link-blog' to="/blog">Blog</Link></p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BlogNav;