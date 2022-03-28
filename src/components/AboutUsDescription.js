import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import agribiz_logo from '../components/assets/img/agribiz_logo_green.png';

export default function AboutUsDescription() {
  return (
    <>
        <Container fluid style={{ backgroundColor: '#36590026' }}>
            <Container>
                <br/><br/>
                <Row>
                    <Col sm style={{ textAlign: 'left'}}>
                        <div style={{ fontWeight: '600', fontSize: '3rem'}}>About Us</div>
                        <br/>
                        <p>
                            Agribiz is a capstone project that aims to help local farmers. One of our mission is to reduce the food waste of farmers’ excessive harvest by simply applying the barter system, so that no food will be put to waste.
                            <br/><br/>
                            Agribiz not only help farmers to sell their fresh produce, but also provide assistance. With Agribiz, farmers can request assistance financially, request farm equipments or borrow it.
                            <br/><br/>
                            Agribiz believes that together we grow, but evolving together is much better.
                        </p>
                    </Col>
                    <Col sm>
                        <br/><br/><br/>
                        <img src={ agribiz_logo } alt="barter" style={{ width: '449px', height: '188px'}}/>
                        <br/>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
        </Container>
    </>
  );
}
