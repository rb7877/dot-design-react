
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Combos.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Row, Col, Form, Tab, Tabs, Modal } from "react-bootstrap";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Addcombos() {

  const [addCustomerShow, setAddCustomer] = useState(false);
  const [editCustomerShow, seteditCustomer] = useState(false);
  const handleClose1 = () =>setAddCustomer(false);
  const handleClose2 = () =>seteditCustomer(false);

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
                  <NavLink to="/Promotion/combos/" className={`${style.back}`}>Back</NavLink>
                  Add Combos</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>

              </Col>
            </Row>
          </Card.Title>


        </Card>

        {/* <Card className="mb-4"> */}
        <Card.Body>

          <div className={`${cx.tabsSection}`}>
            <Tabs defaultActiveKey="basicinformation" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="basicinformation" title="Basic information">
                <Form>


                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>  Name (English )</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Control type="text" placeholder="Enter English Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Name (Arabic )</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Control type="text" placeholder="Enter Arabic Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Description (English)</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Control as="textarea" rows={3} />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Description (Arabic)</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Control as="textarea" rows={3} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Category</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Select>
                        <option>-- Select Category --</option>
                        <option>pizza</option>
                        <option>icecream</option>
                        <option>burger</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Tags</Form.Label>
                    </Col>
                    <Col lg={8}>
                    <Form.Select>
                        <option>-- Select Tag --</option>
                        <option>test 1</option>
                        <option>test 2</option>
                        <option>test 3</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Timed Event</Form.Label>
                    </Col>
                    <Col lg={8}>
                    <Form.Select>
                        <option>-- Select Event --</option>
                        <option>test 1</option>
                        <option>test 2</option>
                        <option>test 3</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>SKU</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Control type="text" placeholder="Enter SKU" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Barcode</Form.Label>
                    </Col>
                    <Col lg={8}>
                      <Form.Control type="text" placeholder="Enter Barcode" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className={`row align-items-center ${cx.formBox}`}
                    controlId="formName"
                  >
                    <Col lg={4}>
                      <Form.Label>Branch</Form.Label>
                    </Col>
                    <Col lg={8}>
                    <Form.Select>
                        <option>-- Select Branch --</option>
                        <option>test 1</option>
                        <option>test 2</option>
                        <option>test 3</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                </Form>
                <Card className="mb-4">
                  <Card.Title>
                    <Row className={`align-items-center ${style.rowTitle}`}>



                      <Col className={`${style.rowTitleRight}`} lg={15}>
                        <button className={`btn ${style.width100}`}>Close</button>
                        <button className={`btn ${style.width100}`}>Apply</button>
                      </Col>

                    </Row>
                  </Card.Title>


                </Card>
              </Tab>

              <Tab eventKey="ComboItems" title="Combo Items ">
                <Card className="mt-4">
                  <Card.Title>
                    <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                      <Col className={`${style.rowTitleLeft}`} lg={12}>

                      </Col>
                      <Col className={`${style.rowTitleRight}`} lg={12}>

                        <button className={`btn ${style.width100}`}
                          onClick={() => setAddCustomer(true)}>+ Add Combos</button>

                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Body>

                    <div className="table-responsive">
                      <table className={`table m-0 ${cx.simpleTable}`}>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Upgradable</th>
                            <th>Option</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Test</td>
                            <td>Cashier</td>
                            <td>Cashier</td>
                            <td>
                              <div className={`${cx.action}`}>
                                <img onClick={() => seteditCustomer(true)}
                                  src={ActionEdit}
                                  className={`${cx.actionIcon}`}
                                  alt="img" />
                                <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </Card.Body>
                </Card>

                <Modal
                  className={`${cx.ctsPopup}`}
                  size="lg"
                  show={addCustomerShow}
                  onHide={() => setAddCustomer(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Form>
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Add Combos
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Name ( English )</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Qwerty" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Name ( Arabic )</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Enter your fill" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Possibly</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Row className={`${cx.checkboxRow}`}>

                            <label className={`${cx.checkbox}`}>
                              <input type="checkbox" />
                              <span className={`${cx.checkmark}`}></span>Yes, it is upgradeable
                            </label>

                          </Row>
                        </Col>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Col lg={12}>
                        <Row className="align-items-center">
                          <Col lg={6} className={`${cx.leftft}`}>
                            <button type="button" className={`${style.bgremove}`}>
                              Clear
                            </button>
                          </Col>
                          <Col lg={6} className={`${cx.rightft}`}>
                            <button type="button" className={`btn ${cx.close}`}onClick={handleClose1}>
                              Close
                            </button>
                            <button type="button" className={`btn ${cx.apply}`}>
                              Apply
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Modal.Footer>
                  </Form>
                </Modal>

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
                        Edit Combos
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Name ( English )</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Qwerty" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Name ( Arabic )</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Enter your fill" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Possibly</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Row className={`${cx.checkboxRow}`}>

                            <label className={`${cx.checkbox}`}>
                              <input type="checkbox" />
                              <span className={`${cx.checkmark}`}></span>Yes, it is upgradeable
                            </label>

                          </Row>
                        </Col>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Col lg={12}>
                        <Row className="align-items-center">
                          <Col lg={6} className={`${cx.leftft}`}>
                            <button type="button" className={`${style.bgremove}`}>
                              Clear
                            </button>
                          </Col>
                          <Col lg={6} className={`${cx.rightft}`}>
                            <button type="button" className={`btn ${cx.close}`}onClick={handleClose2}>
                              Close
                            </button>
                            <button type="button" className={`btn ${cx.apply}`}>
                              Apply
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Tab>

              <Tab eventKey="UnitsOptions" title="UnitsOptions ">
                <Card className="mt-4">
                  <Card.Title>
                    <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                      <Col className={`${style.rowTitleLeft}`} lg={12}>

                      </Col>
                      <Col className={`${style.rowTitleRight}`} lg={12}>
                        <button className={`btn ${style.width100}`}>+ Add Combos</button>

                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Body>

                    <div className="table-responsive">
                      <table className={`table m-0 ${cx.simpleTable}`}>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Upgradable</th>
                            <th>Option</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Test</td>
                            <td>Cashier</td>
                            <td>Cashier</td>
                            <td>
                              <div className={`${cx.action}`}>
                                <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                                <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </Card.Body>
                </Card>
              </Tab>
              <Tab eventKey="PriceandSizes" title="Price and Sizes ">
                <Card className="mt-4">

                  <Card.Body>

                    <div className="table-responsive">
                      <table className={`table m-0 ${cx.simpleTable}`}>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Test</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <div className={`${cx.action}`}>
                                <img src={ActionEdit} className={`${cx.actionIcon}`} onClick={() => setAddCustomer(true)} alt="img" />
                                <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </Card.Body>
                </Card>
                <Modal
                  className={`${cx.ctsPopup}`}
                  size="lg"
                  show={addCustomerShow}
                  onHide={() => setAddCustomer(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Form>
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Add New
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Name ( English )</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Enter English Name" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Name ( Arabic )</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Enter Arabic Name" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> Barcode</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Enter Barcode" />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >
                        <Col lg={4}>
                          <Form.Label> SKU</Form.Label>
                        </Col>
                        <Col lg={8}>
                          <Form.Control type="text" placeholder="Enter SKU" />
                        </Col>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Col lg={12}>
                        <Row className="align-items-center">
                          <Col lg={6} className={`${cx.leftft}`}>
                            <button type="button" className={`${style.bgremove}`}>
                              Clear
                            </button>
                          </Col>
                          <Col lg={6} className={`${cx.rightft}`}>
                            <button type="button" className={`btn ${cx.close}`}onClick={handleClose1}>
                              Close
                            </button>
                            <button type="button" className={`btn ${cx.apply}`}>
                              Apply
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Tab>
            </Tabs>
          </div>
        </Card.Body>
        {/* </Card>  */}

      </section>
      <Footer />
    </>
  );
}
