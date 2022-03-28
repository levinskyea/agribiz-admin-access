import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <>
        <Container>
            <footer className="fixed-bottom" style={{ backgroundColor: '#365900', height: '45px' }}>
                <Container >
                    <Row style={{ color: '#FFFFFF', lineHeight: '52px'}}>
                        <Col style={{ color: '#FFFFFF', textAlign: 'left'}}>
                            © 2022 Agribiz. All rights reserved.
                        </Col>
                        <Col style={{ color: '#FFFFFF', textAlign: 'right'}}>
                            <a href="/contactus" className="text-decoration-none" style={{ color: '#FFFFFF'}}>Contact Us</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="/privacy" className="text-decoration-none" style={{ color: '#FFFFFF'}}>Privacy</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="/termsAndConditions" className="text-decoration-none" style={{ color: '#FFFFFF'}}>Terms & Conditions</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    </>
  );
}
