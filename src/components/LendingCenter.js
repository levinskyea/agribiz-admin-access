import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function LendingCenter() {
  return (
    <>
      <Container>
        <br />
        <h4 style={{ fontWeight: "600" }}>Loan Application</h4>
        <Row className="mb-2">
          <Col sm={3} className="mb-2">
            <Form.Control
              id=""
              type="number"
              className="custom-form-control"
              placeholder="Amount of loan"
            />
          </Col>
          <Col sm={6}>
            <Form.Control
              id=""
              type="text"
              className="custom-form-control"
              placeholder="Purpose of loan"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={3} className="mb-2">
            <Form>
              <Form.Group>
                <Form.Select
                  id="selectedPurchaseOption"
                  className="custom-form-control"
                  style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900'}}               >
                  <option>--Purchase of--</option>
                  <option value="Land">Land</option>
                  <option value="Seeds">Seedlings</option>
                  <option value="Farm equipments">
                    Farm Equipments/Machineries
                  </option>
                  <option value="Farm renovation">
                    Farm Improvement/Renovation
                  </option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={3} className="mb-2">
            <Form.Control
              id=""
              type="text"
              className="custom-form-control"
              placeholder="Please specify"
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              id=""
              type="number"
              className="custom-form-control"
              placeholder="Project cost"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={3} className="mb-3">
            <Form.Control
              id=""
              type="text"
              className="custom-form-control"
              placeholder="Payment Period"
              disabled
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              id=""
              type="text"
              className="custom-form-control"
              placeholder="Amount"
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              id=""
              type="text"
              className="custom-form-control"
              placeholder="Loan applied for"
            />
          </Col>
        </Row>
        <h4 style={{ fontWeight: "600" }}>Loan Requests</h4>
      </Container>
    </>
  );
}
