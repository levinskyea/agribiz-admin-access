import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { auth, db } from '../Firebase';
import Button from "react-bootstrap/Button";
import CashSelection from "./CashSelection";
import SuccessDonationMessage from "./SuccessDonationMessage";
import { collection, addDoc, setDoc, doc, serverTimestamp  } from "firebase/firestore";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut, EmailAuthProvider, linkWithCredential,updateProfile  } from "firebase/auth";

export default function DonationEntry() {

  const [option, setOption] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNo,setPhoneNo] = useState("");
  const [organization,setOrganization] = useState("");
  const [donationType,setDonationType] = useState("Items, Equipment & Machinerie");
  const [message,setMessage] = useState("");

  const setUpRecaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSubmit();
      }
    }, auth);
  }

  const onSubmit = () => {
    setUpRecaptcha()
    console.log(phoneNo)
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, "+63" + phoneNo, appVerifier)
      .then((confirmationResult) => {
        // const credential = EmailAuthProvider.credential(email, password);
        // SMS sent. Prompt user to type the code from the message, then sign the
        console.log(phoneNo);
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult.confirm(code).then((result) => {
          const user = result.user;
          submitDonation();
          console.log("Order sent")
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error)
        // ...
      });
  }

  async function submitDonation() {
    const docRef = await addDoc(collection(db, "ngoDonation"), {
      ngoEmail: email,
      ngoID: getAuth().currentUser.uid,
      userPhoneNumber: '+63' + phoneNo,
      ngoFullName:fullname,
      ngoOrganization: organization,
      ngoDonationType: donationType,
      ngoMessage:message
    })
      .then(
        () => {
          console.log("ngo Donation recorded!");
          setValidated(false);
          setSuccessMessage(true);
          setFullname("")
          setEmail("")
          setMessage("")
          setOrganization("")
          setPhoneNo("")
          setDonationType("")

          setTimeout(() => {
            console.log('Hello, World!')
            setSuccessMessage(false);
          }, 3000);
        }
      )
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      
      e.stopPropagation();
    }
    else {
      // Code for OTP
      // setModalShow(true);
      onSubmit();
    }
    setValidated(true);
    console.log("I'm hereeee");
  }

  return (
    <>
      <Container style={{ textAlign: "left" }}>
      <div id="recaptcha-container"></div>
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
                  value={fullname}
                  onChange = {(e)=>setFullname(e.target.value)}
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
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
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
                  value={phoneNo}
                  onChange={e=>setPhoneNo(e.target.value)}
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
                  value={organization}
                  onChange={e=>setOrganization(e.target.value)}
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
                      value={donationType}
                      onClick={(e) => {setDonationType(e.target.value); console.log(e.target.value);}}
                      style={{
                        borderColor: "#365900",
                        borderRadius: "8px",
                        boxShadow: "0 0 0 0.1rem #365900",
                      }}
                    >
                      <option value="Items, Equipment & Machinerie">Items, Equipment & Machineries</option>
                      <option value="Cash">Cash</option>
                    </Form.Select>
                  </Form.Group>
                </fieldset>
                {/* Choose file appears only when cash is selected. */}
                {donationType === "Cash" && <CashSelection />}
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
                  value={message}
                  onChange={e=>setMessage(e.target.value)}
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

        {/* <VerificationModal
          show={modalShow}
          showSuccessMessage={() => setSuccessMessage(true)}
          onHide={() => setModalShow(false)}
          dialogClassName="modal-90w"
        /> */}
        <br />

      </Container>
      <br/>
    </>
  );
}
