import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function VerificationModal(props) {
  
  const phoneNumberHolder = "000";

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-50w"
        centered
      >
        <Modal.Body>
          <br />
          <h3 className="text-center" style={{ color: "#5E3819" }}>
            Enter Verification Code
          </h3>
          <br />
          <h6 className="text-center" style={{ color: "#5E3819" }}>
            A verification is sent by SMS to
          </h6>
          <h3
            className="text-center"
            style={{ color: "#5E3819", fontWeight: "bold" }}
          >
            {phoneNumberHolder}
          </h3>

          <Row>
            <Col></Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter code"
                style={{
                  borderColor: "#365900",
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0.1rem #365900",
                }}
              />
            </Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <Container style={{ textAlign: "center" }}>
            <Button
              className="border-0"
              style={{
                backgroundColor: "#C4C4C4",
                borderRadius: "20px",
                width: "191px",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
              onClick={props.onHide}
            >
              Close
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              className="border-0"
              style={{
                backgroundColor: "#FFC727",
                color: "#365900",
                borderRadius: "20px",
                width: "191px",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Container>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
}
