
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Branch.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form ,InputGroup} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Branchdetails() {


  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const[addTagShow,setAddTag]=useState(false);
  const[addDeliveryShow,setAddDelivery]=useState(false);
 const[deleteOrderShow,setDeleteOrder]=useState(false);
const[deleteTransactionShow,setDeleteTransaction]=useState(false);
  const[addSectionShow,setAddSection]=useState(false);
  const[deleteBranchShow,setDeleteBranch]=useState(false);
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
                  <NavLink to="/settings/Branch/" className={`${style.back}`}>Back</NavLink>
                  Branch 1
                  </h5>
                  
              </Col>
             
              <Col className={`${style.rowTitleRight}`} lg={6}>
              <button
                  className={`btn ${style.width50} ${style.leftSpace}`}
                  onClick={() => setLgShow(true)}
                >
                Copy Settings
                </button>
                <button
                  className={`btn ${style.width50} ${style.rightSpace}`}
                  onClick={() => setAddCustomer(true)}
                 >
                Edit Branch
                </button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className={`${style.bgBox}`}>
              <Row>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${cx.table50}`}>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>Branch 1</td>
                        </tr>
                        <tr>
                          <td>Opening From</td>
                          <td>00:00</td>
                        </tr>

                        <tr>
                          <td>Inventory End of Day</td>
                          <td>00:00</td>
                        </tr>
                        
                        
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${cx.table50}`}>
                      <tbody>
                        <tr>
                          <td>Reference</td>
                          <td>B01</td>
                        </tr>
                        <tr>
                          <td>Opening To</td>
                          <td>23:00</td>
                        </tr>

                        <tr>
                          <td>Tax Group</td>
                          <td>-</td>
                        </tr>
                      

                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>


          </Card.Body>
        </Card>


        <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Tag</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                        onClick={() => setAddTag(true)}> Add Tags</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card> 

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Delivery Zones</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                        onClick={() => setAddDelivery(true)}> Add Delivery Zones</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Users</h5>
                    </Col>
                    
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
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
                      <h5>Sections</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddSection(true)}>Add Section</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                   
                      <th>Name</th>
                      <th>Tables</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
                      <td>floor1</td>
                      <td>5</td>
                      <td>July 04, 10:59am</td>
                    </tr>

                    <tr>
                     
                     <td>o</td>
                     <td>8</td>
                     <td>July 04, 10:59am</td>
                   </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Assigned Devices</h5>
                    </Col>
                   
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      
                      <th>Name</th>
                      <th>Reference</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>Cashier 1</td>
                      <td>C01 </td>
                      <td>Cashier </td>
                      
                      <td className={`${cx.user}`}>
                        <span>Used</span>
                      </td>
                     </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Assigned Discounts</h5>
                    </Col>
                   
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      
                      <th>Name</th>
                      <th>Value</th>
                      <th>Applies On</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    
                      <td>100%	 </td>
                      <td >100%	</td>
                      <td className={`${cx.buttonlist}`}>
                        <span className={`${cx.spanbtn}`}>
                        <button>Dine In</button>
                        <button>Pick Up</button>
                        <button>Delivery</button>
                        <button>Drive Thru</button>
                        </span>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

           

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Assigned Charges</h5>
                    </Col>
                   
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
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
                      <h5>Assigned Timed Events</h5>
                    </Col>
                    
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Assigned Promotions</h5>
                    </Col>
                    
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>


            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Delete Branch Orders</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                       onClick={() => setDeleteOrder(true)}>Delete Orders</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Delete Branch Inventory Transaction</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`} onClick={() => setDeleteTransaction(true)} >Delete Transaction </button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>Delete Branch</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`} onClick={() => setDeleteBranch(true)} > Delete Branch</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Name 1</td>
                      <td className={`${cx.date}`}>
                        <h6>2020-04-14</h6>
                        <p>08:21:40 PM</p>
                      </td>
                      <td>
                      <div className={`${cx.action}`}>
                        <img src={ActionEdit} className={`${cx.actionIcon}`} alt="img" />
                        <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
                      </div>
                      </td>
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
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Add Size</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Add Size</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Name" />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                  <button type="button" className={`${style.bgremove}`}>
                    Clear
                  </button>
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                    Apply
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
            <Modal.Title id="example-modal-sizes-title-lg">Copy Branch Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branches to copy settings</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Choose...  " />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Applies on settings</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Choose...  " />
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
                    Apply
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
           Edit Branch
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
                <Form.Control type="text" placeholder="Branch 1" />
              </Col>
            </Form.Group>
            <Row lg={12}>
                      <Form.Group
                        className={`row align-items-center ${cx.formBox}`}
                        controlId="formName"
                      >

                        <Col lg={4}>
                          <Form.Label>Reference</Form.Label>
                        </Col>

                        <Col lg={8}>
                          <InputGroup className={`${cx.pinBox}`}>
                            <Form.Control type="text" placeholder="B01" />
                            <button className={`btn ${cx.generateBtn}`}>Generate</button>
                          </InputGroup>
                        </Col>

                      </Form.Group>
                    </Row>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tax Group</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Choose..." />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branch Tax Registration Name</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branch Tax Number</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text"  />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Opening From</Form.Label>
              </Col>
              <Col lg={8}>
            <Form.Select>
              <option>00:00</option>
              <option>00:00</option>
              <option>00:00</option>
              <option>00:00</option>

            </Form.Select>
              </Col>
            </Form.Group>
            
            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Opening To</Form.Label>
              </Col>
              <Col lg={8}>
            <Form.Select>
              <option>00:00</option>
              <option>00:00</option>
              <option>00:00</option>
              </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Phone</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="number"  />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Address </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text" as="textarea" rows={3}  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Latitude </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="number"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Longitude  </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="number"  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Receipt Header  </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text" as="textarea" rows={3}  />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Receipt Footer </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text" as="textarea" rows={3}  />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
               
              </Col>
              <Col lg={8}>
                <Row className={`${cx.checkboxRow}`}>
                  <Col lg={8}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Receive call center and api orders

                    </label>
                  </Col>
                  </Row>
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
                    Apply
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
        show={addTagShow}
        onHide={() => setAddTag(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Copy Branch Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tags</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Choose...  " />
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
                    Apply
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
        show={addDeliveryShow}
        onHide={() => setAddDelivery(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Delivery Zones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Delivery Zones</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Choose...  " />
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
        show={addSectionShow}
        onHide={() => setAddSection(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Add Section</Modal.Title>
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
           
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Number of Tables </Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="number" />
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
        className={`${cx.ctsPopup} ${cx.importBody}`}
        show={deleteOrderShow}
        onHide={() => setDeleteOrder(false)}
        aria-labelledby="example-modal-sizes-title-md"
        centered
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-md">
              Confirm
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to clear branch orders?</p>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Cancel
            </button>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Yes
            </button>
          </Modal.Body>
        </Form>
      </Modal>
      
      
      <Modal
        className={`${cx.ctsPopup} ${cx.importBody}`}
        show={deleteTransactionShow}
        onHide={() => setDeleteTransaction(false)}
        aria-labelledby="example-modal-sizes-title-md"
        centered
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-md">
              Confirm
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to clear branch inventory?</p>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Cancel
            </button>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Yes
            </button>
          </Modal.Body>
        </Form>
      </Modal>

      <Modal
        className={`${cx.ctsPopup} ${cx.importBody}`}
        show={deleteBranchShow}
        onHide={() => setDeleteBranch(false)}
        aria-labelledby="example-modal-sizes-title-md"
        centered
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-md">
              Confirm
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this?</p>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Cancel
            </button>
            <button type="button" className={`btn ${cx.importBtn}`}>
              Yes
            </button>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );

  }
