//import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../Firebase";

export default function Login() {
  //const [email, setEmail] = useState();
  //const [password, setPassword] = useState();
  // const [show, setShow] = useState();
  const history = useNavigate();

  // const login = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user)
  //       history('/dashboard')
  //     })
  //     .catch((error) => {
  //       // const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage)
  //     })
  // }

  // useEffect(() => {
  //   console.log(email);
  //   console.log(password);
  // }, [email, password]);

  var attempt = 3; // Variable to count number of attempts.
  // Below function Executes on click of login button.
  const validate = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "P@ssw0rd") {
      alert("Login successful");
      // Redirecting to other page.
      history("/dashboard",{state:{auth:true}});
      return false;
    } else {
      attempt--; // Decrementing by one.
      alert("You have left " + attempt + " attempt;");
      // Disabling fields after 3 attempts.
      if (attempt === 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
      }
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <h3 style={{ fontWeight: "600" }}>Admin Login</h3>
      <br />
      <Container className="auth">
        <form method="post">
          <Row>
            <Col></Col>
            <Col>
              <FloatingLabel controlId="adminUsername" label="Username">
                <Form.Control
                  id="username"
                  type="email"
                  placeholder="Username"
                  style={{
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                />
              </FloatingLabel>
              <br />
              <FloatingLabel controlId="adminPassword" label="Password">
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Password"
                  style={{
                    borderColor: "#365900",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 0.1rem #365900",
                  }}
                />
              </FloatingLabel>
              <br />
              <br />
              {/* User needs to be authenticated before routing it to the admin dashboard */}
              <Button
                id="submit"
                onClick={validate}
                style={{
                  backgroundColor: "#FFC727",
                  color: "#365900",
                  width: "200px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderWidth: "0px",
                  borderRadius: "20px",
                  borderColor: "#FFC727",
                }}
              >
                Login
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </form>
      </Container>
      <Footer />
    </>
  );
}
