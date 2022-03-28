import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import VerificationModal from "./VerificationModal";
import CashSelection from "./CashSelection";
import SuccessDonationMessage from "./SuccessDonationMessage";

export default function DonationEntry() {
  const [modalShow, setModalShow] = useState(false);
  const [option, setOption] = useState(false);

  return (
    <>
      <Container>
        <br />
        <h5 style={{ textAlign: "left", color: "#365900", fontWeight: "600" }}>
          You are about to donate our farmers...
        </h5>
        <br />
        <Row>
          <Col>
            <FloatingLabel controlId="ngoFullName" label="Full name">
              <Form.Control
                type="text"
                placeholder="Full name"
                style={{
                  borderColor: "#365900",
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0.1rem #365900",
                }}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="ngoEmailAddress" label="Email address">
              <Form.Control
                type="email"
                placeholder="Email address"
                style={{
                  borderColor: "#365900",
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0.1rem #365900",
                }}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="ngoPhoneNumber" label="Phone number">
              <Form.Control
                type="number"
                placeholder="Phone number"
                style={{
                  borderColor: "#365900",
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0.1rem #365900",
                }}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="ngoOrganization" label="Organization">
              <Form.Control
                type="text"
                placeholder="Organization"
                style={{
                  borderColor: "#365900",
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0.1rem #365900",
                }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <br />

        <h6 style={{ textAlign: "left", color: "#365900", fontWeight: "600" }}>
          For items or machinery equipments, you may drop them at University of
          Cebu - Banilad Campus or you may contact{" "}
          <b>James Alwin Aljecera - 09567724913 </b>
        </h6>

        <Row>
          <Col xs={3}>
            <br />
            <Form>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Select
                    id="selectedDonationOption"
                    onClick={(e) => setOption(e.target.value)}
                    style={{
                      borderColor: "#365900",
                      borderRadius: "8px",
                      boxShadow: "0 0 0 0.1rem #365900",
                    }}
                  >
                    <option value="0">Items, Equipment & Machineries</option>
                    <option value="1">Cash</option>
                  </Form.Select>
                </Form.Group>
              </fieldset>
              {/* Choose file appears only when cash is selected. */}
              {option === "1" && <CashSelection />}
            </Form>
          </Col>
          <Col xs={9}>
            <br />
            <FloatingLabel
              controlId="floatingWriteMessage"
              label="Write a short message here for the farmers..."
            >
              <Form.Control
                as="textarea"
                placeholder="Write a short message here for the farmers..."
                style={{
                  height: "100px",
                  borderColor: "#365900",
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0.1rem #365900",
                }}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <br />

        <Row>
          <Col sm={6}>
            <br />
            <br />
            <SuccessDonationMessage />
          </Col>
          <Col>{/* Do not add something here */}</Col>
          <Col>
            <br />
            <div className="mb-2">
              <Button
                className="border-0"
                size="lg"
                onClick={() => setModalShow(true)}
                style={{
                  backgroundColor: "#FFC727",
                  color: "#365900",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderWidth: "0px",
                  borderRadius: "20px",
                  borderColor: "#FFC727",
                }}
              >
                Submit Donation
              </Button>

              <VerificationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dialogClassName="modal-90w"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
