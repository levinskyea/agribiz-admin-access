import { useState, useEffect } from 'react';
import LoginHeader from '../components/LoginHeader';
import Footer from '../components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        history('/dashboard')
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })
  }

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <>
      <LoginHeader/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 style={{ fontWeight:'600'}}>Admin Login</h3>
        <br/>
        <Container className="auth">
          <Row>
            <Col></Col>
            <Col>
              <FloatingLabel controlId="adminEmailAddress" label="Email address">
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}/>
              </FloatingLabel>
              <br/>
              <FloatingLabel controlId="adminPassword" label="Password">
                  <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" style={{ borderColor: '#365900', borderRadius: '8px', boxShadow: '0 0 0 0.1rem #365900' }}/>
              </FloatingLabel>
              <br/>
              <br/>
              {/* User needs to be authenticated before routing it to the admin dashboard */}
              <Button onClick={() => login(auth)} style={{ backgroundColor:'#FFC727', color: '#365900', width: '200px', fontSize: '1.5rem', fontWeight:'600', borderWidth: '0px', borderRadius: '20px', borderColor: '#FFC727'}}>
                Login
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      <Footer/>
    </>
  );
}
