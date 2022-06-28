import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Branch.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import img1 from "../../../images/1.svg";

export default function Acounting() {
  return (
    <>   <Header />
        <Sidebar/>
    <section className={`${style.pageWrapper}`}>
      <Card className="mb-4">
      <Card.Title>
          <Row className={`align-items-center ${style.rowTitle}`}>
            <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
              <h5>Acounting</h5>
            </Col>
           </Row>
        </Card.Title>
          <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card>
      <Card.Title>
          <Row className={`align-items-center ${style.rowTitle}`}>
            <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
              <h5>Food Aggregator</h5>
            </Col>
           </Row>
        </Card.Title>
          <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <img src={img1} />
                  <h3>Xero</h3>
                  <p>Sync Sales and inventory data with xero</p>
                  <button className={`btn ${cx.installBtn}`}>Install</button> 
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

      </section>
      <Footer />

    </>
  );
}
