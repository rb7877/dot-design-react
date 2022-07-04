
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Customerdetails.module.scss";
import details from "./Customerdetails.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Customerdetails() {
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [addAddressShow, setAddAddress] = useState(false);
  const [addPaymentShow, setAddPayment] = useState(false);
  
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
                  <NavLink to="/sales/customers/" className={`${style.back}`}>Back</NavLink>
                  Abdulrhman Alokizi</h5>
              </Col>
            </Row>
          </Card.Title>
          <Row>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Done cxs</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Total Spent (SAR)</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Total Discounts (SAR)</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Last cx</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Favourite Product</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Favourite Branch</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Account Balance (SAR)</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Total Credit (SAR)</h6>
                <h3>250</h3>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={`${details.countCard}`}>
                <h6>Total Debit (SAR)</h6>
                <h3>250</h3>
              </div>
            </Col>
          </Row>
          <Card.Body>
            <div className={`${style.bgBox}`}>

              <Row>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${details.table50}`}>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>Abdulrhman Alkozi</td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td>+966 56 200 9030</td>
                        </tr>
                        <tr>
                          <td>House Accounts</td>
                          <td>Enabled</td>
                        </tr>
                        <tr>
                          <td>Blacklist</td>
                          <td>No</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${details.table50}`}>
                      <tbody>
                        <tr>
                          <td>Email</td>
                          <td>a.f.alkozi@gmail.com</td>
                        </tr>
                        <tr>
                          <td>Loyalty</td>
                          <td>Disabled</td>
                        </tr>
                        <tr>
                          <td>House Account Limit</td>
                          <td>-</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>


          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5>Tag</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`} onClick={() => setAddCustomer(true)}>Add Tags</button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>

            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={12}>
                <ul className={`${details.tagsList}`}>
                  <li>Welcome</li>
                  <li>Saudi</li>
                </ul>
              </Col>

            </Row>
          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5>Addresses</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`} onClick={() => setAddAddress(true)}>Add Address</button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <table className={`table m-0 ${details.simpleTable}`}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delivery Zone</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PIPSI</td>
                    <td>asdfsd</td>
                    <td>---</td>
                    <td>July 01, 12:13pm</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>



        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5>House Account Transactions</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`} onClick={() => setAddPayment(true)}>Add Payment</button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <table className={`table m-0 ${details.simpleTable}`}>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Creator</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Debit</td>
                    <td>SAR 500</td>
                    <td>fajok</td>
                    <td>July 01, 12:13pm</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>
      </section>
      <Footer />
      <Modal className={`${cx.ctsPopup}`}
        size="lg"
        show={addCustomerShow}
        onHide={() => setAddCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
        <Form>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add Tag
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className={`row align-items-center ${cx.formBox}`} controlId="formName">
              <Col lg={4}><Form.Label>Tags</Form.Label></Col>
              <Col lg={8}><Form.Control type="text" placeholder="Choose..." /></Col>
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Col lg={12}>
            <Row className="align-items-center">
             
              <Col lg={12} className={`${cx.rightft}`}>
                <button type="button" className={`btn ${cx.close}`}>Close</button>
                <button type="button" className={`btn ${cx.apply}`}>Apply</button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
        
        </Form>
      </Modal>
      
      <Modal className={`${cx.ctsPopup}`}
        size="lg"
        show={addAddressShow}
        onHide={() => setAddAddress(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
        <Form>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Create Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className={`row align-items-center ${cx.formBox}`} controlId="formName">
              <Col lg={4}><Form.Label>Name</Form.Label></Col>
              <Col lg={8}><Form.Control type="text" /></Col>
            </Form.Group>

            <Form.Group className={`row align-items-center ${cx.formBox}`} controlId="formName">
              <Col lg={4}><Form.Label>Description</Form.Label></Col>
              <Col lg={8}><Form.Control as="textarea"  rows={3} /></Col>
            </Form.Group>
          
            <Form.Group className={`row align-items-center ${cx.formBox}`} controlId="formName">
              <Col lg={4}><Form.Label>Delivery Zone</Form.Label></Col>
              <Col lg={8}><Form.Control type="text" placeholder="Choose..." /></Col>
            </Form.Group> 
        </Modal.Body>
        <Modal.Footer>
          <Col lg={12}>
            <Row className="align-items-center">
             
              <Col lg={12} className={`${cx.rightft}`}>
                <button type="button" className={`btn ${cx.close}`}>Close</button>
                <button type="button" className={`btn ${cx.apply}`}>Save</button>
              </Col>
            </Row>
          </Col>
        </Modal.Footer>
        
        </Form>
      </Modal>
      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={addPaymentShow}
        onHide={() => setAddPayment(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Add Payment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <h5>Amount(SAR)</h5>
              <Col lg={4}>
                
              </Col>
              <Col lg={12}>
                <Form.Control type="number"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <h5>Payment Method</h5>
              <Col lg={4}>
                
              </Col>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Choose..." />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={12} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                    Save
                  </button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
