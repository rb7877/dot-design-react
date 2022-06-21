
import React from "react";
import style from "../../../style.module.scss";
import details from "./Orderdetails.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function OrderDetails() {
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
                        <NavLink to="/sales/orders/" className={`${style.back}`}>Back</NavLink>
                        Order #73</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>Send Inboice</button>
                      <button className={`btn ${style.width100}`}>Print</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
                <div className={`${style.bgBox}`}>
                  <Row>
                    <Col lg={6}>
                      <div className="table-responsive">
                      <table className={`table ${details.table50}`}>
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
                    <Col lg={6}>
                      <div className="table-responsive">
                      <table className={`table ${details.table50}`}>
                        <tbody>
                          <tr>
                            <td>Branch</td>
                            <td>Mall 1</td>
                          </tr>
                          <tr>
                            <td>Type</td>
                            <td>Dine In</td>
                          </tr>
                          <tr>
                            <td>Persons</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Cashier</td>
                            <td>Cashier</td>
                          </tr>
                          <tr>
                            <td>Device</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Driver</td>
                            <td>441506</td>
                          </tr>
                          <tr>
                            <td>Kitchen Received</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Closed at</td>
                            <td>2022-05-16 04:38:06 PM</td>
                          </tr>
                          <tr>
                            <td>Preparation Time</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Customer Phone</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </Col>
                  </Row>
                </div>
              
                  
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                
              <div className="table-responsive">
                <table className={`table m-0 ${details.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Payment Type</th>
                      <th></th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className={`${details.nameList}`}>
                        <h6>Classic Fries كلاسيك فرايز (1)</h6>
                        <p>Received: No | Done: No | Preparation Time: 30 Min</p>
                      </td>
                      <td>13.04347826087</td>
                      <td>1</td>
                      <td>13.04347826087</td>
                    </tr>
                    
                    <tr>
                      <td>2</td>
                      <td className={`${details.nameList}`}>
                        <h6>Classic Fries كلاسيك فرايز (1)</h6>
                        <p>Received: No | Done: No | Preparation Time: 30 Min</p>
                      </td>
                      <td>13.04347826087</td>
                      <td>1</td>
                      <td>13.04347826087</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className={`${details.nameList}`}>
                        <h6>Classic Fries كلاسيك فرايز (1)</h6>
                        <p>Received: No | Done: No | Preparation Time: 30 Min</p>
                      </td>
                      <td>13.04347826087</td>
                      <td>1</td>
                      <td>13.04347826087</td>
                    </tr>
                  </tbody>
                </table>
              </div>

                <div className={`bg-white table-responsive  ${details.totalPayment}`}>

                  <table className={`table m-0 ${details.simpleTable}`}>
                    
                    <tbody className={`${details.table50}`}>
                      <tr>
                        <th>Subtotal</th>
                        <td>39.13043478261</td>
                      </tr>
                      <tr>
                        <th>Tax</th>
                        <td>5.87</td>
                      </tr>
                      <tr>
                        <th>Discount</th>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>44</td>
                      </tr>
                      <tr>
                        <th>Shabaka</th>
                        <td>44</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               
              </Card.Body>
            </Card>

            
            <Card>
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={12}>
                      <h5>Payment Details</h5>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${details.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>Created Date</th>
                      <th>Payment Type</th>
                      <th>Card Type</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`${style.nameList}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>Cash</td>
                      <td>Cash</td>
                      <td>45.00</td>
                      <td>Complete</td>
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
                      <h5>Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>+ Add Tags</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${details.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${details.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${details.action}`}>
                        <img src={ActionEdit} className={`${details.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${details.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            
            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={12}>
                      <h5>Taxes List</h5>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${details.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Linked Branches</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Service</td>
                      <td>15%</td>
                      <td>Branches(0)</td>
                      <td>
                      <div className={`${details.action}`}>
                        <img src={ActionEdit} className={`${details.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${details.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Service</td>
                      <td>15%</td>
                      <td>Branches(0)</td>
                      <td>
                      <div className={`${details.action}`}>
                        <img src={ActionEdit} className={`${details.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${details.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Service</td>
                      <td>15%</td>
                      <td>Branches(0)</td>
                      <td>
                      <div className={`${details.action}`}>
                        <img src={ActionEdit} className={`${details.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${details.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>
          </section>
        <Footer />
    </>
  );
}
