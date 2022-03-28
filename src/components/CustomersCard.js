import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import customers_logo from '../components/assets/img/number-customers.png';

export default function CustomersCard() {

    const number_of_customers = 0;

    return (
    <>
        <Card style={{ width: '300px', height: '137px', borderRadius: '20px', backgroundColor: '#FFC727'}}>
            <Card.Body>
                <Row>
                    <Col>
                    <img src={ customers_logo } alt="customers_logo" style={{ width: '100px', height: '100px'}}/>
                    </Col>
                    <Col>
                        <Card.Title style={{ lineHeight: '30px'}}>
                            <br/>
                            <b style={{ fontSize: '3rem'}}>{ number_of_customers }</b>
                            <br/>
                            <b style={{ fontSize: '1rem'}}>Customers</b>
                        </Card.Title>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>
  );
}
