import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EcommerceCard from './EcommerceCard';
import BarterCard from './BarterCard';
import DonateCard from './DonateCard';

export default function Features() {
  return (
    <>
        <br/>
        <Container fluid style={{ backgroundColor: '#36590026' }}>
            <br/><br/>
            <p style={{ fontSize: '3rem', fontWeight: '600'}}>
                Our Features
            </p>
            <br/><br/>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <EcommerceCard />
                    </Col>
                    <Col xs={6} md={4}>
                        <BarterCard/>
                    </Col>
                    <Col xs={6} md={4}>
                        <DonateCard/>
                    </Col>
                </Row>
            </Container>
            <br/><br/><br/>
        </Container>
    </>
  );
}
