
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Reasons.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form ,InputGroup} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Reasons() {

  const[addSectionShow,setAddSection]=useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose=()=>{
    setLgShow(false)
  }

  const handleClose1=()=>{
    setAddCustomer(false)
  }

  const handleClose2=()=>{
    setAddSection(false)
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
                
                  <NavLink to="/settings/reasons/" className={`${style.back}`}>Back</NavLink>
                  <h5>Reasons</h5>
                  
              </Col>
            </Row>
          </Card.Title>
          <Card.Title>
          <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Void And Return Reason</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddSection(true)}>Create Reason</button>
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
                      <h5>Quantity Adjustment Reason</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddCustomer(true)}>Create Reason</button>
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
            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Drawer Operation Reason</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setLgShow(true)}>Create Reason</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <tbody>
                    <tr>
                      <td>Cash Change</td>
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
        show={addSectionShow}
        onHide={() => setAddSection(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Create Void And Return Reason</Modal.Title>
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
        show={addCustomerShow}
        onHide={() => setAddCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Create  Quantity Adjustment Reason
            </Modal.Title>
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
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                 
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose1}>
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
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Create Drawer Operation Reason</Modal.Title>
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
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
               
                <Col lg={12} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose}>
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

    

     

     
    </>
  );

  }
