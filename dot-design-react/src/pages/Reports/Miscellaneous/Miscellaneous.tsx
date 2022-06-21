import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Miscellaneous.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import line from "../../../images/line.svg";


export default function Miscellaneous() {
  
  const [categoryShow, setCategoryShow] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const [cashierShow, setCashierShow] = useState(false);
  const [paymentShow, setPaymentShow] = useState(false);
  const [customersShow, setCustomersShow] = useState(false);
  
  const handleClose = () => setCategoryShow(false);
  const handleClose2 = () => setProductShow(false);
  const handleClose3 = () => setCashierShow(false);
  const handleClose4 = () => setPaymentShow(false);
  const handleClose5 = () => setCustomersShow(false);
  
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          <Card.Body style={{ minHeight: '600px' }}>
              <Row className={`${cx.btnsRow}`}>
                <Col lg={12} className={`${cx.pgTitle}`}>
                  <h3 className={`${cx.tt}`}>Inventory Reports</h3>
                  <img src={line} className={`${cx.line}`} alt="line" />
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Products Preparation Time</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Products Cost</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Product Returns</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Till Logs</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Till Operations</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Void Reasons</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Employees Shifts</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Taxes</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Order Discounts</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Products Discounts</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Product Size Discounts</Button>
                </Col>
              </Row>
          </Card.Body>
        </Card>
      </section>
      <Footer />

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={categoryShow}
        onHide={() => setCategoryShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Products Sales</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Date</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="2022-05-17 - 2022-05-18" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branches</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>All</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Product</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>All</option>
                </Form.Select>
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
                <Form.Select aria-label="Source">
                  <option>All</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer >
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose}>
                    Close
                  </button>
                  <Button type="button" className={`btn ${cx.apply}`}>
                  Generate Rerport
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>

      

    </>
  );
}
