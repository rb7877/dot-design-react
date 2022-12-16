import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageMore.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Table, Col, Modal, Form, Dropdown } from "react-bootstrap";
import icon4 from "../../images/icon-printer.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from 'react-icons/md';  
import Modals from "../../components/Modals/OrderModal";



export default function ManageMore() {

  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState("");
  const handleShow = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow");
    setModalName(modalname);
    setShow(status);
  };
  const handleClose = () => {
    setModalName("");
    setShow(false);
  };

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Manage</h5>
            </div>
          </div>
        </div>


        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
                <Row>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more/taxes" className={`${cx.moreOption}`}>
                    Taxes & Groups
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Payment Methods 
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Charges
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Delivery Zones
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Tags
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Reasons
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Kitchen Flows
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Reservations
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Subscription
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Online Ordering
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Price Tags
                    </NavLink>
                  </Col>
                 
                  <Col lg={3}>
                    <NavLink to="/manage/manage-more" className={`${cx.moreOption}`}>
                    Settings
                    </NavLink>
                  </Col>
                 
                </Row>

            </Card.Body>
          </Card>
        </div>
      </section>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
