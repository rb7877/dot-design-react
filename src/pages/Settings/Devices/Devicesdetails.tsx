
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Devices.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Devicesdetails() {

  const [addSectionShow, setAddSection] = useState(false);
  const [deactivateDeviceShow, setDeactivateDevice] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  

  const handleClose = () => {
    setLgShow(false)
  }

  const handleClose1 = () => {
    setDeactivateDevice(false)
  }

  const handleClose2 = () => {
    setAddSection(false)
  }

  const handleClose3 = () => {
    setEditShow(false)
  }

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
                  <NavLink to="/settings/devices" className={`${style.back}`}>Back</NavLink>
                  test2</h5>

              </Col>

              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
                <button
                  className={`btn ${style.width50}`}
                  onClick={() => setEditShow(true)}
                >
                  Edit Device 
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
                          <td>Reference</td>
                          <td>C11</td>
                        </tr>
                        <tr>
                          <td>Branch</td>
                          <td>فرع الاحساء</td>
                        </tr>

                        <tr>
                          <td>App Version</td>
                          <td>5.0.33 (284)</td>
                        </tr>
                        <tr>
                          <td>Menu Group</td>
                          <td>—</td>
                        </tr>

                        <tr>
                          <td>Last Sync</td>
                          <td>June 08, 12:55pm</td>
                        </tr>
                        <tr>
                          <td>Last Order</td>
                          <td>—</td>
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
                          <td>Type</td>
                          <td>Cashier</td>
                        </tr>
                        <tr>
                          <td>Model</td>
                          <td>iPad11,6</td>
                        </tr>

                        <tr>
                          <td>System Version</td>
                          <td>iOS 15.4.1</td>
                        </tr>
                        <tr>
                          <td>Receives Online Orders</td>
                          <td>No</td>
                        </tr>

                        <tr>
                          <td>Last Online</td>
                          <td>June 16, 11:11am</td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>


          </Card.Body>
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}

              >
                <h5>Tags</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}
                  onClick={() => setAddSection(true)}>Add Tags</button>
              </Col>
            </Row>
          </Card.Title>

        </Card>

        <Card className="mt-4">

          <Card.Body>

            <div className="table-responsive">
              <table className={`table m-0 ${cx.simpleTable}`}>
                <tbody>
                  <tr>
                    <td>Customer Cancelled</td>
                  </tr>
                  <tr>
                    <td>Product Not Available</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}

              >
                <h5>Deactivate Device</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}
                  onClick={() => setDeactivateDevice(true)}>Deactivate Device</button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <table className={`table m-0 ${cx.simpleTable}`}>
                <tbody>
                  <tr>
                    <td>Expired</td>
                  </tr>
                  <tr>
                    <td>Waste</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>
      
      </section>
      <Footer />

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Edit Device</Modal.Title>
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
                <Form.Control type="text" />
              </Col>
            </Form.Group>
           
           
            <Row lg={12}>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >

                <Col lg={4}>
                  <Form.Label>Reference</Form.Label>
                </Col>

                <Col lg={8}>
                  <InputGroup className={`${cx.pinBox}`}>
                    <Form.Control type="text" placeholder="" />
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
                <Form.Label>Menu Group</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                <option>Choose...</option>
                  <option>Type1</option>
                  <option>Type2</option>

                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              className={`row ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
               
              </Col>
              <Col lg={8}>
                <Row className={`${cx.checkboxRow}`}>
                  <Col lg={6}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Receives Online Orders
                    </label>
                  </Col>
                 
                  </Row>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                  
                </Col>

                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose3}>
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

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={addSectionShow}
        onHide={() => setAddSection(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Add Tag</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tag</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>Any</option>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>

                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose2}>
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
        className={`${cx.ctsPopup} ${cx.importBody}`}
        show={deactivateDeviceShow}
        onHide={() => setDeactivateDevice(false)}
        aria-labelledby="example-modal-sizes-title-md"
        centered
      >
       <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-md">
            Confirm
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Deactivating the device will stop it immediately! Are you sure you want to deactivate this device?</p>
            <button type="button" className={`btn ${cx.importBtn}`} onClick={handleClose1}>
              Cancel
            </button>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Yes
            </button>
          </Modal.Body>
        </Form>
      </Modal>








    </>
  );

}
