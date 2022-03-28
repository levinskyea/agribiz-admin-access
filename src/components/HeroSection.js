import React from "react";
import farmer_logo from "./assets/img/hero-image-farmer.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeroSection() {
  return (
    <>
      <br />
      <Container>
        <Row>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <Col style={{ textAlign: "left" }}>
            <br />
            <br />
            <div style={{ fontWeight: "700", fontSize: "2.9rem" }}>
              Reduce food waste, <br /> help farmers.
            </div>
            <div style={{ fontSize: "1.2rem", color: "#365900" }}>
              Together we grow, but evolving together is better.
            </div>
            <br />
          </Col>
          <Col>
            <img
              src={farmer_logo}
              alt="farmer_round"
              style={{ width: "419px", height: "377px" }}
            />
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
}
