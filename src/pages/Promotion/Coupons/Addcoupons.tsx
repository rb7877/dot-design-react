
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Coupons.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Addcoupons() {
    const [editCustomerShow, seteditCustomer] = useState(false);
    const handleClose = () =>seteditCustomer(false);
  return (
    <>
       
        <Sidebar />
          <section className={`${style.pageWrapper}`}>
          <Card className="mb-4">
              <Card.Title>
                  <Row className={`align-items-center ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                        <NavLink to="/promotion/coupons" className={`${style.back}`}> Back </NavLink>
                        <Col className={`${style.rowTitleRight}`} lg={2}>
                        <h5>
                     
                      <Col className={`${style.rowTitleRight}`} lg={3}>
                   <button className={`btn ${style.width100}`}>Active</button>
                      
                    </Col>
                   
                  </h5>
                  
                        </Col> 
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>Deactivate Coupon</button>
                      <button className={`btn ${style.width100}`} onClick={() => seteditCustomer(true)}>Edit Coupons
                      </button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
            <div className={`${style.bgBox}`}>
              <Row>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${cx.table50}`}>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>HI</td>
                        </tr>
                        <tr>
                          <td>Discount</td>
                          <td>100%</td>
                        </tr>

                        <tr>
                          <td>Time</td>
                          <td>00:00 - 00:00</td>
                        </tr>
                        <tr>
                          <td>Total Usage</td>
                          <td>0</td>
                        </tr>
                        
                        
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${cx.table50}`}>
                      <tbody>
                        <tr>
                          <td>Code</td>
                          <td>hi</td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td>2022-07-01 - 2022-07-31</td>
                        </tr>

                        <tr>
                          <td>Maximum Uses</td>
                          <td>100</td>
                        </tr>
                      

                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>


              </Card.Body>
              {/* <Card.Body>
                <div className={`${style.bgBox}`}>
                  <Row>
                    <Col lg={6}>
                      <div className="table-responsive">
                      <table className={`table ${cx.table50}`}>
                        <tbody>
                          <tr>
                            <td>Order Number</td>
                            <td>441506</td>
                          </tr>
                          <tr>
                            <td>Source</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Table</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Tags</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Waiter</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Agent</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Business Date</td>
                            <td>2022-05-16 04:38:06 AM</td>
                          </tr>
                          <tr>
                            <td>Open At</td>
                            <td>2022-05-16 04:37:01 PM</td>
                          </tr>
                          <tr>
                            <td>Kitchen Done</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Customer Name</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </Col>
                   
                  </Row>
                </div>
              
              </Card.Body> */}
            </Card>

          </section>
        <Footer />
        <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={editCustomerShow}
        onHide={() => seteditCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Edit Coupons
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="HI" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Maximum Uses</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="100" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Start Date</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="date"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>End Date</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="date"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Start Time</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option value="">-- Choose time to --</option>
              <option value="00">12 AM</option>
							<option value="01">01 AM</option>
							<option value="02">02 AM</option>
							<option value="03">03 AM</option>
			        <option value="04">04 AM</option>
							<option value="05">05 AM</option>
							<option value="06">06 AM</option>
							<option value="07">07 AM</option>
							<option value="08">08 AM</option>
							<option value="09">09 AM</option>
							<option value="10">10 AM</option>
							<option value="11">11 AM</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>End Time</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option value="">-- Choose time to --</option>
              <option value="00">12 AM</option>
							<option value="01">01 AM</option>
							<option value="02">02 AM</option>
							<option value="03">03 AM</option>
			        <option value="04">04 AM</option>
							<option value="05">05 AM</option>
							<option value="06">06 AM</option>
							<option value="07">07 AM</option>
							<option value="08">08 AM</option>
							<option value="09">09 AM</option>
							<option value="10">10 AM</option>
							<option value="11">11 AM</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={12} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`}onClick={handleClose}>
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
