import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Branch.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import {BiDotsHorizontalRounded} from "react-icons/bi";



export default function Acounting() {
  // const instance = <DateRangePicker />;
  return (
    <>   <Header />
        <Sidebar/>
    <section className={`${style.pageWrapper}`}>
      <Card>
      <Card.Title>
          <Row className={`align-items-center ${style.rowTitle}`}>
            <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
              <h5>Acounting</h5>
            </Col>
           </Row>
        </Card.Title>
          <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col md={6} lg={6}>
              <ul>
                          <div className={`${cx.userName}`}>
                          <img src="" alt="" />
                          <h5>Xero</h5> 
                          <p>Sync Sales and
                          <br></br> inventory data with xero</p>
                          <input type="button" value="Install" />
                          </div>
                     

               </ul>
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
              <Col md={12} lg={6}>
              
                         <div className={`${cx.userName}`}>
                         <img src="" alt="" />
                          <h5>Xero</h5> 
                         <p>Sync Sales and
                          <br></br> inventory data with xero</p>
                          <input type="button" value="Install" />
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
