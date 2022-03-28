import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import farmers_logo from '../components/assets/img/number-farmers.png';

export default function FarmersCard() {

    const number_of_farmers = 0;

    return (
    <>
        <Card style={{ width: '300px', height: '137px', borderRadius: '20px', backgroundColor: '#FFC727'}}>
            <Card.Body>
                <Row>
                    <Col>
                    <img src={ farmers_logo } alt="farmers_logo" style={{ width: '100px', height: '100px'}}/>
                    </Col>
                    <Col>
                        <Card.Title style={{ lineHeight: '30px'}}>
                            <br/>
                            <b style={{ fontSize: '3rem'}}>{ number_of_farmers }</b>
                            <br/>
                            <b style={{ fontSize: '1rem'}}>Farmers</b>
                        </Card.Title>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>
  );
}
