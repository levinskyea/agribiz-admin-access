import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import fruits_veggies_logo from '../components/assets/img/fruit-and-vegetables.png';
import fertilizer_logo from '../components/assets/img/fertilizer.png';
import livestock_poultry_logo from '../components/assets/img/livestock-poultry.png';
import animal_feed_logo from '../components/assets/img/animal-feed.png';

export default function Products() {
  return (
    <>
        <Container>
            <br />
            <br />
            <p className="header-text">
                Our Products
                <br/>
            </p>
            <Row>
                <Col>
                    <Card className="justify-content-center custom-card">
                        <Card.Body>
                            <br/>
                            <img className="p-img-card" src={ fruits_veggies_logo } alt="sell_products"/>
                            <br/>
                            <br/>
                            <Card.Title className="card-title-text">
                                Fruits & Vegetables
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <br/>
                    {/* <img src={ fruits_veggies_logo } alt="fruits and vegetables" />
                    <h4 style={{ lineHeight: '215px'}}>Fruits & vegetables</h4> */}
                </Col>
                <Col>
                    <Card className="justify-content-center custom-card">
                        <Card.Body>
                        <br/>
                            <img className="p-img-card" src={ fertilizer_logo } alt="fruits_veggies"/>
                            <br/><br/>
                            <Card.Title className="card-title-text">
                                Fertilizers
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <br/>
                    {/* <img src={ fertilizer_logo } alt="fertilizer"/>
                    <h4 style={{ lineHeight: '80px'}}>Fertilizers</h4> */}
                </Col>
                <Col>
                    <Card className="justify-content-center custom-card">
                        <Card.Body>
                        <br/>
                            <img className="p-img-card" src={ livestock_poultry_logo } alt="livestock_poultry"/>
                            <br/><br/>
                            <Card.Title className="card-title-text">
                                Livestock & Poultry
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <br/>
                    {/* <img src={ livestock_poultry_logo } alt="livestock and poultry"/>
                    <h4 style={{ lineHeight: '100px'}}>Livestock & Poultry</h4> */}
                </Col>
                <Col>
                    <Card className="justify-content-center custom-card">
                        <Card.Body>
                        <br/>
                            <img className="img-card-animal-feed" src={ animal_feed_logo } alt="animal_feed"/>
                            <br/><br/>
                            <Card.Title className="card-title-text">
                                Animal Feed
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <br/>
                    {/* <img src={ animal_feed_logo } alt="animal feeds"/>
                    <h4 style={{ lineHeight: '200px'}}>Animal Feed</h4> */}
                </Col>
            </Row>
            <br/><br/>
        </Container>
    </>
  );
}
