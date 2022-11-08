import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Todayorders.module.scss";
import table from "../../datatable.module.scss";
import { Card, Tooltip, OverlayTrigger, Button, Modal, Form, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import icon1 from "../../images/icon-branch.svg";
import icon5 from "../../images/icon-call.svg";
import Modals from "../../components/Modals/TodayorderModals";
import iconFilter from "../../images/icon-filter.svg";
import iconClose from "../../images/icon-close.svg";

import { Branches, Agents } from "./Dropdowns";
import { AiFillInfoCircle } from 'react-icons/ai';

export default function Todayorders() {
  const [lgShow, setLgShow] = useState(false);

  // Modals

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

  const Control = ({ children, ...props }: ControlProps) => {
    // @ts-ignore
    const { emoji, onEmojiClick } = props.selectProps;
    const style = { cursor: "pointer" };

    return (
      <components.Control {...props}>
        <span onMouseDown={onEmojiClick} style={style}>
          <img src={icon1} className={`${st.icon}`} />
        </span>
        {children}
      </components.Control>
    );
  };

  const options = [
    {
      value: "1",
      label: "Orders",
    },
    {
      value: "2",
      label: "Orders Items",
    },
    {
      value: "3",
      label: "Orders Payment",
    },
    {
      value: "4",
      label: "Orders 1",
    },
  ];
  const [selected, setSelected] = useState([]);
  const customValueRenderer = (selected: any, options: any) => {
    return (
      <>
        <img src={icon1} className={`${st.icon}`} /> All Branches
      </>
    );
  };
  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Today's Orders

                {['bottom'].map((placement) => (
                  <OverlayTrigger key={placement} overlay={
                    <Tooltip className={`${st.tooltipsBg}`} id={`tooltip-${placement}`}>
                      This module is to help Call Center Agents track their daily orders
                    </Tooltip>}>
                    <span className={`${st.tooltips} ms-2`} style={{ top: '4px' }}><AiFillInfoCircle /></span>
                  </OverlayTrigger>
                ))}
              </h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <Branches />
              <Agents />
              <button
                className={`btn`}
                onClick={() => {
                  handleShow("today order filter", true);
                }}
              >
                <img src={iconFilter} className={`${st.icon}`} />
                Filter
                <img src={iconClose} className={`${st.iconClose}`} />
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside} pb-0`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>

              <div className={`${cx.orderCardList}`}>

                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Draft
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Order that are not yet sent to the branch
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don't have Draft orders</span>
                    </div>
                  </div>
                </div>



                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Pending
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that are not yet accepted by the branch
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don’t have draft orders</span>
                    </div>
                  </div>
                </div>


                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Active
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that are currently being prepared in the branch
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don’t have draft orders</span>
                    </div>
                  </div>
                </div>

                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Declined
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that have been declined from the branch or the call center
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don’t have draft orders </span>
                    </div>
                  </div>
                </div>


                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Closed
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that are completed, voided, joined or returned
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don't have Closed orders</span>
                    </div>
                  </div>
                </div>

              </div>

            </Card.Body>
          </Card>
        </div>
      </section>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
