import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import agribiz_logo from '../components/assets/img/send-message.png';

export default function ContactUs() {
    return (
        <>
            <Header/>
                <Container>
                <br /><br />
                <p style={{ fontSize: '3rem', fontWeight: '600'}}>
                    Contact Us
                </p>
                <h5 style={{ color: '#365900'}}>Questions not answered yet? We are here to help!</h5>
                <br/>
                <Row>
                    <Col>
                        <img src={ agribiz_logo } alt="barter" style={{ width: '436px', height: '395px'}}/>
                    </Col>
                    <Col>
                        <br/>
                        <FloatingLabel controlId="cuFirstName" label="First name">
                            <Form.Control type="text" placeholder="First name" style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}/>
                        </FloatingLabel>
                        <br/>
                        <FloatingLabel controlId="cuLastName" label="Last name">
                            <Form.Control type="text" placeholder="Last name" style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}/>
                        </FloatingLabel>
                        <br/>
                        <FloatingLabel controlId="cuEmailAddress" label="Email address">
                            <Form.Control type="email" placeholder="Email address" style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}/>
                        </FloatingLabel>
                        <br/>
                        <FloatingLabel controlId="cuYourQuestions" label="Your questions...">
                            <Form.Control
                            as="textarea"
                            placeholder="Your questions..."
                            style={{ height: '100px', borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}
                            />
                        </FloatingLabel>
                        <br/>
                        <Button style={{ backgroundColor:'#FFC727', color: '#365900', width: '420px', fontSize: '1.5rem', fontWeight:'600', borderWidth: '0px', borderRadius: '20px', borderColor: '#FFC727'}}>
                            Send message
                        </Button>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                </Container>
            <Footer/>
        </>
    );
}
