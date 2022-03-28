import {useState} from "react";
import { Container, Row, Col, Button, Tab, Tabs, Form } from "react-bootstrap";
import FarmersCard from "../components/FarmersCard";
import CustomersCard from "../components/CustomersCard";
import AgrovetsCard from "../components/AgrovetsCard";
import TotalCashDonations from "../components/TotalCashDonations";
import FruitsCard from "../components/FruitsCard";
import LoginHeader from "../components/LoginHeader";
import VegetablesCard from "../components/VegetablesCard";
import Livestock from "../components/Livestock";
import Poultry from "../components/Poultry";
import AddFarmerForm from "../components/AddFarmerForm";
import UsersTable from "../components/UsersTable";
import LendingCenter from "../components/LendingCenter";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

export default function AdminDashboard() {

  const [addUserShow, setAddUserShow] = useState(false);
  const history = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        history('/')
    }).catch((error) => {
    // An error happened.
        console.log("Sign out unsuccessful.")
    });
  }

  return (
    <>
      <LoginHeader />
      <Container style={{ textAlign: "left" }}>
        <div style={{ textAlign: 'right'}}>
          <Button onClick={() => logout(auth)} variant="warning">Logout</Button>
        </div>
        <Tabs
          id="controlled-tab-example"
          variant="pills"
          defaultActiveKey="users"
          className="mb-2"
        >
          <Tab eventKey="users" title="Users">
            <br />
            {/* <h4 style={{ fontWeight: '600'}}>Add users</h4> */}
            <Row>
              <Col>
                <Form.Control
                    type="text"
                    placeholder="Search user"
                    style={{
                      borderColor: "#365900",
                      borderRadius: "8px",
                      boxShadow: "0 0 0 0.1rem #365900",
                    }}
                  />
              </Col>
              <Col>
                <Button style={{ backgroundColor: '#FFC727', color: '#365900', borderColor:'#FFC727'}}>Search</Button>
              </Col>
              <Col>{/* Do not add something here */}</Col>
              <Col>{/* Do not add something here */}
              <Button
                  style={{
                    backgroundColor: "#365900",
                    color: "#FFC727",
                    width: "200px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    borderWidth: "0px",
                    borderRadius: "20px",
                    borderColor: "#FFC727",
                  }}
                  onClick={() => setAddUserShow(true)}
                >
                  + add a user
              </Button>
                <AddFarmerForm
                  show={addUserShow}
                  onHide={() => setAddUserShow(false)}
                />
              </Col>
            </Row>
            <br />
            <br />
            {/* <h4 className="mb-3" style={{ fontWeight: '600'}}>View users</h4> */}
            <Row>
                <Col>
                  <UsersTable />
                </Col>
            </Row>
            
          </Tab>
          <Tab eventKey="usersAndDonations" title="Users and Donations">
            <br />
            <h4 style={{ fontWeight: "600" }}>Total number of users</h4>
            <Row className="justify-content-center">
              <Col>
                <FarmersCard />
                <br />
              </Col>
              <Col>
                <CustomersCard />
                <br />
              </Col>
              <Col>
                <AgrovetsCard />
                <br />
              </Col>
              <Col>{/* Do not add something here */}</Col>
            </Row>
            <h4 style={{ fontWeight: "600" }}>Donations Received</h4>
            <Row>
              <Col>
                <TotalCashDonations />
                <br />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="productsSold" title="Products">
            <br />
            <h4 style={{ fontWeight: "600" }}>Product Sales</h4>
            <Row>
              <Col>
                <FruitsCard />
                <br />
              </Col>
              <Col>
                <VegetablesCard />
                <br />
              </Col>
              <Col>
                <Livestock />
                <br />
              </Col>
              <Col>
                <Poultry />
                <br />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="lendingCenter" title="Lending Center">
            <LendingCenter/>
          </Tab>
        </Tabs>
      </Container>

      <br />
    </>
  );
}
