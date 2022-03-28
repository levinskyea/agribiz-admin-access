import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default function LoginHeader() {

    return (
    <>
        <Navbar className="custom-navbar sticky-top p-4" expand="lg">
            <Container >
                <Nav.Link as={Link} to='/home'>
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
