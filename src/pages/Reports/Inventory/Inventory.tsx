import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Inventory.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import line from "../../../images/line.svg";


export default function Inventory() {
  
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
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Items Cost</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Products Sales</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Inventory Item Total Cost</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Item History</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Item Control</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Consumption</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Levels</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Semi Finished Item Levels</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Expiration</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Total Transfers</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Total Purchases</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Pending Transfer</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Item History</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Inventory Item Recipe</Button>
                </Col>
                <Col md={6} lg={4}>
                  <Button className={`btn`} onClick={() => setCategoryShow(true)}>Modifier Recipe</Button>
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
                <Form.Control type="date"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tag</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>All</option>
                  <option>test 1</option>
                  <option>test 2</option>
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
