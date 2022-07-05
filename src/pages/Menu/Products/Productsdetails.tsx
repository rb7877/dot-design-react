
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import details from "./Products.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Productsdetails() {


  const [lgShow, setLgShow] = useState(false);

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
                  <NavLink to="/promotion/combos/" className={`${style.back}`}>Back</NavLink>
                  A2</h5>
                  
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}
                  >Edit Product</button>
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
                          <td>Name</td>
                          <td>Abdulrhman Alkozi</td>
                        </tr>
                        <tr>
                          <td>SKU</td>
                          <td>sk-0006</td>
                        </tr>

                        <tr>
                          <td>Tax Group</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Selling Method</td>
                          <td>Unit</td>
                        </tr>
                        <tr>
                          <td>Preparation Time</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Ingredients Cost</td>
                          <td>SAR 0</td>
                        </tr>
                        <tr>
                          <td>Cost %</td>
                          <td>0%</td>
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
                          <td>Category</td>
                          <td>DENKS</td>
                        </tr>
                        <tr>
                          <td>Barcode</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Pricing Method</td>
                          <td>Fixed Price</td>
                        </tr>
                        <tr>
                          <td>Costing Method</td>
                          <td>From Ingredients</td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td>SAR 500</td>
                        </tr>
                        <tr>
                          <td>Calories</td>
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
                      <button className={`btn ${style.width100}`}> Add Tags</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Modifiers</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}> Add Modifiers</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Ingredients</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}> Add Ingredients</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Custom Price</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>Select Branches</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Inactive In Branches</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>Select Branches</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Out Of Stock</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>Select Branches</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Applies on Price Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}>Add Price Tags</button>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Groups</h5>
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
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Timed Events</h5>
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



       


      </section>
      <Footer />

      <Modal
        className={`${details.ctsPopup}`}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Add Size</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${details.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Add Size</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Name" />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${details.leftft}`}>
                  <button type="button" className={`${style.bgremove}`}>
                    Clear
                  </button>
                </Col>
                <Col lg={6} className={`${details.rightft}`}>
                  <button type="button" className={`btn ${details.close}`}>
                    Close
                  </button>
                  <button type="button" className={`btn ${details.apply}`}>
                    Apply
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
