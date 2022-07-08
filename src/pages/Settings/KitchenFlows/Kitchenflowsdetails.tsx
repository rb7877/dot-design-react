
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Kitchenflows.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form ,InputGroup} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Kitchenflowsdetails() {

  const[addSectionShow,setAddSection]=useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose=()=>{
    setLgShow(false)
  }

  const handleClose1=()=>{
    setAddCustomer(false)
  }

  const handleClose2=()=>{
    setAddSection(false)
  }

  const handleClose3=()=>{
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
                  <NavLink to="/settings/kitchenflows/" className={`${style.back}`}>Back</NavLink>
                  1</h5>
                  
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
              <button
                  className={`btn ${style.width50}`}
                  onClick={() => setEditShow(true)}
                >
                  Edit flow
                </button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Title>
          <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Stations</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddSection(true)}>Add Station</button>
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
                      <h5>Branches</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddCustomer(true)}>Add Branches</button>
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
                      <h5>Product</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setLgShow(true)}>Add Product</button>
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
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Edit Kitchen Flows</Modal.Title>
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
                <button type="button" className={`${style.bgremove}`}>Delete Kitchen flow</button>
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
            <Modal.Title id="example-modal-sizes-title-lg">Add Station</Modal.Title>
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
            Add Branches
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branches</Form.Label>
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
            <Modal.Title id="example-modal-sizes-title-lg">Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Product</Form.Label>
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
