import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import barter_logo from '../components/assets/img/barter.png';
import ecommerce_logo from '../components/assets/img/basket.png';
import donate_logo from '../components/assets/img/donate.png';  
import borrow_logo from '../components/assets/img/borrow.png';

export default function Services() {
  return (
    <>
        <Container>
            <p className="header-text">
                Our Services
                <br />
            </p>
            <h6>
            We offer the full spectrum of services to help farmers sell their produce, and support them among <br/> the following areas, but not limited to: requesting financial assistance, request farm equipments, <br/> or borrow machineries. 
            We also offer barter system for the farmers’ excessive harvest <br/> that promotes food waste reduction.
            </h6>
            <br/>
            <Container >
                <Row>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                            <br/>
                                <img className="s-img-card" src={ ecommerce_logo } alt="sell_products"/>
                                <br/><br/>
                                <Card.Title className="card-title-text">
                                    ECommerce App
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                            <br/>
                                <img className="s-img-card" src={ barter_logo } alt="barter"/>
                                <br/><br/>
                                <Card.Title className="card-title-text">
                                    Barter Items
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                            <br/>
                                <img className="s-img-card" src={ donate_logo } alt="donate"/>
                                <br/><br/>
                                <Card.Title className="card-title-text">
                                    Accept Donations
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Body>
                                <br/>
                                <img className="s-img-card" src={ borrow_logo } alt="borrow"/>
                                <br/><br/>
                                <Card.Title className="card-title-text">
                                    Money Lending
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    </>
  );
}
