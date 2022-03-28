import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Header() {

    return (
    <>
        <Navbar className="custom-navbar sticky-top p-4" expand="lg">
            <Container >
                <Nav.Link as={Link} to='/'>
                    <Navbar.Brand className="custom-navbrand">
                        AGRIBIZ
                        {/* <img src={ agribiz_logo } alt="barter" style={{ width: '155px', height: '65px'}}/> */}
                    </Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <></>
                        </li>
                    </ul>
                    <Nav className="justify-content-end">
                        <Nav.Link className="custom-nav-link" as={Link} to='/home'>
                            Home&nbsp;&nbsp;
                        </Nav.Link>
                        <Nav.Link className="custom-nav-link" as={Link} to='/productsandservices'>
                            Products & Services&nbsp;&nbsp;
                        </Nav.Link>
                        <Nav.Link className="custom-nav-link" as={Link} to='/aboutus'>
                            About Us&nbsp;&nbsp;
                        </Nav.Link>
                        <Nav.Link className="custom-nav-link" as={Link} to='/login'>
                            Login&nbsp;&nbsp;
                        </Nav.Link> 
                        <Nav.Link as={Link} to='/donatenow'>
                            <Button className="custom-donate-button">
                                Donate Now
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}
