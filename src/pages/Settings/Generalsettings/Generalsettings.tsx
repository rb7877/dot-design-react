
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Generalsettings.module.scss";
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

export default function Generalsettings() {

  const [addCustomerShow, setAddCustomer] = useState(false);
  const [editCustomerShow, seteditCustomer] = useState(false);
  const handleClose1 = () => setAddCustomer(false);
  const handleClose2 = () => seteditCustomer(false);

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card className="mb-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5> General Settings</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>

              </Col>
            </Row>
          </Card.Title>


        </Card>

        {/* <Card className="mb-4"> */}
        <Card.Body>

          <div className={`${cx.tabsSection}`}>
            {/* <Tabs defaultActiveKey="generalsettings" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="generalsettings" title="General Settings"> */}
            <Form>


              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>  Country</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Saudi Arabia" />
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Currency</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="SAR" />
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Business Name</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="لحمة وفحمة" />
                </Col>
              </Form.Group>

              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Time Zone</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Asia/Saudi Arabia (GMT+03:00)" />
                </Col>
              </Form.Group>


              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Tax Registration Name</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="لحمة وفحمة" />
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Tax Number</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="302221635200003" />
                </Col>
              </Form.Group>

              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>

                </Col>
                <Col lg={8}>
                  <label className={`${cx.checkbox}`}>
                    <input type="checkbox" />
                    <span className={`${cx.checkmark}`}></span>Tax Inclusive Pricing
                  </label>
                </Col>
              </Form.Group>

              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>

                </Col>
                <Col lg={8}>
                  <label className={`${cx.checkbox}`}>
                    <input type="checkbox" />
                    <span className={`${cx.checkmark}`}></span>Enable Localization
                  </label>
                </Col>
              </Form.Group>

              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>

                </Col>
                <Col lg={8}>
                  <label className={`${cx.checkbox}`}>
                    <input type="checkbox" />
                    <span className={`${cx.checkmark}`}></span>Restrict Purchased Items To Supplier
                  </label>
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
            {/* /   </Tab> */}




            {/* </Tabs> */}
          </div>
        </Card.Body>
        {/* </Card>  */}

      </section>
      <Footer />
    </>
  );
}
