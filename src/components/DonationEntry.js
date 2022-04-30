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

  // const initialState = {
  //   ngoFullName: "",
  //   ngoEmail: "",
  //   ngoPhoneNumber: "",
  //   ngoOrganization: "",
  //   selectedDonationOption: "",
  //   ngoMessage: "",
  // }

  const [modalShow, setModalShow] = useState(false);
  const [option, setOption] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showSuccessMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      
      e.stopPropagation();
    }
    else {
      // Code for OTP
      setModalShow(true);
    }
    setValidated(true);
    console.log("I'm hereeee");
  }

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <br />
        <h5 style={{ color: "#365900", fontWeight: "600" }}>
          You are about to donate our farmers...
        </h5>
        <br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col>
              {/* <FloatingLabel controlId="ngoFullName" label="Full name"></FloatingLabel> */}
                <Form.Control
                  type="text"
                  id="ngoFullName"
                  placeholder="Full name"
                  style={{
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
            </Col>
            <Col>
              {/* <FloatingLabel controlId="ngoEmailAddress" label="Email address"></FloatingLabel> */}
                <Form.Control
                  type="email"
                  id="ngoEmail"
                  placeholder="Email address"
                  style={{
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
            </Col>
            <Col>
              {/* <FloatingLabel controlId="ngoPhoneNumber" label="Phone number"></FloatingLabel> */}
                
                <Form.Control
                  type="number"
                  id="ngoPhoneNumber"
                  placeholder="Phone number"
                  style={{
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone number.
                </Form.Control.Feedback>
            </Col>
            <Col>
              {/* <FloatingLabel controlId="ngoOrganization" label="Organization"></FloatingLabel> */}
                <Form.Control
                  type="text"
                  id="ngoOrganization"
                  placeholder="Organization"
                  style={{
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid organization.
                </Form.Control.Feedback>
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
                    {/* <label>I want to donate:</label> */}
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
                  id="ngoMessage"
                  placeholder="Write a short message here for the farmers..."
                  style={{
                    height: "100px",
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <br />
              <br />
              {showSuccessMessage? <SuccessDonationMessage/> : ""}
            </Col>
            <Col>{/* Do not add something here */}</Col>
            <Col>
              <br />
              <div className="mb-2">
                <Button
                  className="border-0"
                  size="lg"
                  type="submit"
                  //onClick={handleSubmit}
                  //onClick={() => setModalShow(true)}
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
              </div>
            </Col>
          </Row>
        </Form>

        <VerificationModal
          show={modalShow}
          showSuccessMessage={() => setSuccessMessage(true)}
          onHide={() => setModalShow(false)}
          dialogClassName="modal-90w"
        />
        <br />

      </Container>
      <br/>
    </>
  );
}
