// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import "./NavHome.css";

// function NavHome() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className='navbar-head1' variant="dark">
//       <Container>
//         <Navbar.Brand>Credit Finder</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//           </Nav>
//           <Nav>
//             <Nav.Link as={Link} className='link-home-nav' to="/">Home</Nav.Link>
//             <Nav.Link as={Link} className='link-home-nav' to="/about">About</Nav.Link>
//             <NavDropdown title="Card Provides" id="collasible-nav-dropdown" className='link-home-nav' >
//               <NavDropdown.Item>Axis Bank</NavDropdown.Item>
//               <NavDropdown.Item>Au Bank
//               </NavDropdown.Item>
//               <NavDropdown.Item >IndusInd Bank</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link className='link-home-nav' as={Link} to="/blog">Blog</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavHome;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { Link } from 'react-router-dom';
import "./NavHome.css";

function NavHome() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-head1' variant="dark">
      <Container>
        <Navbar.Brand>Credit Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {/* <Nav.Link as={Link} className='link-home-nav' to="/" exact activeClassName='active-link'>Home</Nav.Link> */}
            {/* <Nav.Link as={Link} className='link-home-nav' to="/about" activeClassName='active-link'>About</Nav.Link> */}
            <NavDropdown title="Card Provides" id="collasible-nav-dropdown" className='link-home-nav' >
              <NavDropdown.Item>Axis Bank</NavDropdown.Item>
              <NavDropdown.Item>Au Bank
              </NavDropdown.Item>
              <NavDropdown.Item >IndusInd Bank</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='link-home-nav' as={Link} to="/blog" activeClassName='active-link'>Blog</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHome;
