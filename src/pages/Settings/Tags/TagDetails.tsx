
import React,{ useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Tags.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import { Card, Button, Row, Col, Modal, Form ,InputGroup} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";


export default function Tagdetails() {


  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const[addSectionShow,setAddSection]=useState(false);
  const[orderShow,setOrderShow]=useState(false);
  const[supplierShow,setSupplierShow]=useState(false);
  const[userShow,setUserShow]=useState(false);
  const[productShow,setProductShow]=useState(false);
  const[deviceShow,setDeviceShow]=useState(false);

  return (
    <>
      <Header />
      <Sidebar />

      <section className={`${style.pageWrapper}`}>
        <Card className="mb-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                
                  <NavLink to="/settings/tags" className={`${style.back}`}>Back</NavLink>
                  <h5>Tag Details</h5>
                  
              </Col>
            </Row>
          </Card.Title>
          <Card.Title>
          <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Customer Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddSection(true)}>Create Tag</button>
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
                      <h5>Branch Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddCustomer(true)}>Create Tag</button>
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
                      <h5>Inventory Item Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setLgShow(true)}>Create Tag</button>
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

             <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Order Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setOrderShow(true)}>Create Tag</button>
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

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Supplier Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setSupplierShow(true)}>Create Tag</button>
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

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>User Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setUserShow(true)}>Create Tag</button>
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

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Product Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setProductShow(true)}>Create Tag</button>
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

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Device Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setDeviceShow(true)}>Create Tag</button>
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
     

  
     

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={addSectionShow}
        onHide={() => setAddSection(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Create Customer Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
           Create Branch Tag
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
                  <button type="button" className={`btn ${cx.close}`}>
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
            <Modal.Title id="example-modal-sizes-title-lg">Create Inventory Item Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
        show={orderShow}
        onHide={() => setOrderShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Create Order Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
        show={supplierShow}
        onHide={() => setSupplierShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Create Supplier Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
        show={userShow}
        onHide={() => setUserShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Create User Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
        show={productShow}
        onHide={() => setProductShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Create Product Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
        show={deviceShow}
        onHide={() => setDeviceShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Create Device Tag</Modal.Title>
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
                  <button type="button" className={`btn ${cx.close}`}>
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
