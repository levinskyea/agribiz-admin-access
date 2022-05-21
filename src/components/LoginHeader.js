import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function LoginHeader() {
    const history = useNavigate();
    const logout = () => {
        let text = "Do you want to logout?";
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
          // Redirecting to other page.
          history("/login");
        }
      };
  return (
    <>
      <Navbar className="custom-navbar sticky-top p-4" expand="lg">
        <Container>
          <Nav.Link>
            <Navbar.Brand className="custom-navbrand">
              ADMIN DASHBOARD
              {/* <img src={ agribiz_logo } alt="barter" style={{ width: '155px', height: '65px'}}/> */}
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <></>
              </li>
            </ul>
            <Button onClick={logout} variant="warning">
              Logout
            </Button>
            {/* <Nav className="justify-content-end">
                        <div style={{color:'#5E3819', fontSize:'1.5rem', fontWeight:'600', lineHeight: '60px'}}>
                            Welcome back, admin |
                        </div>
                        <Nav.Link as={Link} to='/home'style={{color:'#365900', fontSize:'1.5rem', fontWeight:'600', lineHeight: '45px' }}>
                            Logout&nbsp;&nbsp;
                        </Nav.Link> 
                    </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
