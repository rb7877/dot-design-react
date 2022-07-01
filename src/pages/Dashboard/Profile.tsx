
import React from "react";
import style from "../../style.module.scss";
import cx from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Row, Col, Form, Tab, Tabs, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function Profile() {
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card className="mb-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5>

                  User 1
                  <button className={`btn ${style.width100}`} style={{ backgroundColor: "white", color: "#5498FD", borderRadius: "3px", border: "2px solid #5498FD", margin: "20px" }}>Account Owner</button>
                </h5>
              </Col>


              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}>Verify Email</button>
                <button className={`btn ${style.width100}`}>Change Password</button>
              </Col>

            </Row>
          </Card.Title>


        </Card>

        <Card className="mb-4">
          <Card.Body>

            <div className={`${cx.tabsSection}`}>
              <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="Profile" title="Profile">
                  <Form>


                    <Form.Group
                      className={`row align-items-center ${cx.formBox}`}
                      controlId="formName"
                    >
                      <Col lg={4}>
                        <Form.Label>  Name </Form.Label>
                      </Col>
                      <Col lg={8}>
                        <Form.Control type="text" placeholder="Text1" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      className={`row align-items-center ${cx.formBox}`}
                      controlId="formName"
                    >
                      <Col lg={4}>
                        <Form.Label>Phone</Form.Label>
                      </Col>
                      <Col lg={8}>
                        <Form.Control type="number" placeholder="+97-222-465-982" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      className={`row align-items-center ${cx.formBox}`}
                      controlId="formName"
                    >
                      <Col lg={4}>
                        <Form.Label>Email</Form.Label>
                      </Col>
                      <Col lg={8}>
                        <Form.Control type="text" placeholder="usertester1@gmail.com" />
                      </Col>
                    </Form.Group>

                    <Row lg={12}>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >

                        <Col lg={4}>
                          <Form.Label>Login Pin</Form.Label>
                        </Col>

                        <Col lg={8}>
                          <InputGroup className={`${cx.pinBox}`}>
                            <Form.Control type="text" placeholder="Enter pin" />
                            <button className={`btn ${cx.generateBtn}`}>Generate</button>
                          </InputGroup>
                        </Col>

                      </Form.Group>
                    </Row>
                    <Form.Group
                      className={`row align-items-center ${cx.formBox}`}
                      controlId="formName"
                    >
                      <Col lg={4}>
                        <Form.Label>Language</Form.Label>
                      </Col>
                      <Col lg={8}>
                        <Form.Control type="text" placeholder="English" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      className={`row align-items-center ${cx.formBox}`}
                      controlId="formName"
                    >
                      <Col lg={4}>
                        <Form.Label> </Form.Label>
                      </Col>
                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> Display Localized Names
                        </label>
                      </Col>
                    </Form.Group>


                  </Form>
                  <Card className="mb-4">
                    <Card.Title style={{ background: 'transparent' }}>
                      <Row className={`align-items-center ${style.rowTitle}`}>
                        <Col className={`${style.rowTitleRight}`} lg={12}>
                          <button className={`btn ${style.width100}`}>Close</button>
                          <button className={`btn ${style.width100}`}>Apply</button>
                        </Col>
                      </Row>
                    </Card.Title>


                  </Card>


                </Tab>
                <Tab eventKey="CategoryIcon" title="Notification">
                  <Form>


                    <Form.Group
                      className={`row align-items-center ${cx.formBox}`}
                      controlId="formName"
                    >

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> Toggle all
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User submits a cost adjustment transaction.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span>User submits an inventory count transaction.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User submits a purchasing transaction.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User submits a quantity adjustment transaction.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User returns items to a supplier.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User receives inventory items from a transfer transaction.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User submits a production transaction.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User sends inventory items from a warehouse or branch.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> Inventory item is not available anymore.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User submits a purchase order for review and needs approval.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> Inventory item reaches its maximum quantity level.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> Inventory item reaches its minimum quantity level.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> User submits a transfer order for review.
                        </label>
                      </Col>

                      <Col lg={8}>
                        <label className={`${cx.checkbox}`}>
                          <input type="checkbox" />
                          <span className={`${cx.checkmark}`}></span> There is a transfer transaction waiting to be received.
                        </label>
                      </Col>

                      <Card className="mb-4">
                        <Card.Title style={{ background: 'transparent' }}>
                          <Row className={`align-items-center ${style.rowTitle}`}>



                            <Col className={`${style.rowTitleRight}`} lg={15}>
                              <button className={`btn ${style.width100}`}>Close</button>
                              <button className={`btn ${style.width100}`}>Apply</button>
                            </Col>

                          </Row>
                        </Card.Title>


                      </Card>



                    </Form.Group>

                  </Form>
                </Tab>
              </Tabs>
            </div>








          </Card.Body>
        </Card>

      </section>
      <Footer />
    </>
  );
}
