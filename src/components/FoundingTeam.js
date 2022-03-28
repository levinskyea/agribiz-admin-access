import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import alwin_picture from '../components/assets/img/alwin.jpg';
import skye_picture from '../components/assets/img/skye.jpg';
import emerson_picture from '../components/assets/img/emerson.jpeg';

export default function FoundingTeam() {
  return (
    <>
        <Container fluid>
            <Container>
                <br/>
                <br/>
                <div style={{ fontWeight: '600', fontSize: '3rem'}}>The Founding Team</div>
                <br/>
                <Row className="justify-content-center">
                    <Col>
                        <img src={ alwin_picture } alt="skye" style={{ width: '300px', height: '300px'}}/>
                        <h5 style={{ lineHeight: '70px'}}>James Alwin Aljecera</h5>
                    </Col>
                    <Col>
                        <img src={ skye_picture } alt="skye" style={{ width: '300px', height: '300px'}}/>
                        <h5 style={{ lineHeight: '70px'}}>Levin Skye Aligway</h5>
                    </Col>
                    <Col>
                        <img src={ emerson_picture } alt="skye" style={{ width: '300px', height: '300px'}}/>
                        <h5 style={{ lineHeight: '70px'}}>Emerson Benatiro</h5>
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
