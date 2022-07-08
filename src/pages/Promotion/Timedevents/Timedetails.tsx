
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Timedevents.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form ,InputGroup} from "react-bootstrap";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";
import Box from "@mui/material/Box";



const handleButtonClick = () => {
  console.log("clicked");
};const data = [
  {
    
    col1: "1",
    col2: "Test",
   
  },]
export default function Timedetails() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

 
  const[addSectionShow,setAddSection]=useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [product, setProducts] = useState(false);
  const [events, setEvents] = useState(false);
  const handleClose=()=>{setLgShow(false)}
  const handleClose1=()=>{setAddCustomer(false)}
  const handleClose2=()=>{setAddSection(false)}
  const handleClose3=()=>{setProducts(false)}
  const handleClose4=()=>{setEvents(false)}

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.col1,
      sortable: true,
      width: "480px",
    },
    {
      name: "Reference",
      selector: (row: any) => row.col2,
      sortable: true,
    
    },]

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
                  <NavLink to="/promotion/timed-events" className={`${style.back}`}>Back</NavLink>
                  Developer testing
                
                  </h5>
                  
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
              <button className={`btn ${style.width100}`}>Deactivate Timed Event</button>
              <button className={`btn ${style.width100}`} onClick={() => setEvents(true)}>Edit Timed Event</button>
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
                          <td>Type</td>
                          <td>Set Fixed Price</td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td>2021-01-11 - 2021-01-27</td>
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
                          <td>Fixed Price</td>
                          <td>SAR 23,412</td>
                        </tr>
                        <tr>
                          <td>Time</td>
                          <td>16:00 - 19:00</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>


          </Card.Body>
          <Card.Title>
          <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Applies On Branches</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddSection(true)}>Edit Branches</button>
                    </Col>
                  </Row>
                  </Card.Title>
          </Card>  
            <Card className="mt-4">
              <Card.Body>
              <div className={`${table.dataTableBox}`}>
              <Box sx={{ width: 1 }}>
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  subHeader
                  subHeaderAlign={Alignment.LEFT}
                  persistTableHead
              
                 
                
                //   expandableRows
                //   expandableRowsComponent={ExpandedComponent}
                />{" "}
              </Box>
            </div>
           
        
              </Card.Body>
            </Card>

            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Applies On Categories</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setAddCustomer(true)}>Edit Categories</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className={`${table.dataTableBox}`}>
              <Box sx={{ width: 1 }}>
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  subHeader
                  subHeaderAlign={Alignment.LEFT}
                  persistTableHead
              
                 
                
                //   expandableRows
                //   expandableRowsComponent={ExpandedComponent}
                />{" "}
              </Box>
            </div>
           
               
              </Card.Body>
            </Card>    
            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Applies On Products</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setLgShow(true)}>Edit Products</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className={`${table.dataTableBox}`}>
              <Box sx={{ width: 1 }}>
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  subHeader
                  subHeaderAlign={Alignment.LEFT}
                  persistTableHead
              
                 
                
                //   expandableRows
                //   expandableRowsComponent={ExpandedComponent}
                />{" "}
              </Box>
            </div>
           
               
              </Card.Body>
            </Card>   
            <Card className="mt-4">
            <Card.Title>
                  <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}
                    
                    >
                      <h5>Applies On Product Tags</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                      <button className={`btn ${style.width100}`}
                         onClick={() => setProducts(true)}>Add Product Tags</button>
                    </Col>
                  </Row>
              </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <tbody>
                    <tr>
                      <td>Select the product tags where this timed event can be applied.</td>
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
            <Modal.Title id="example-modal-sizes-title-lg">Applies On Branches</Modal.Title>
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
                 <option>Choose..</option>  
                  <option>test 1</option>
                  <option>test 2</option>
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
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose2}>
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
            Edit Categories
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Categories</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>test 1</option>
                  <option>test 2</option>
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
            <Modal.Title id="example-modal-sizes-title-lg">Edit Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Products</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>test 1</option>
                  <option>test 2</option>
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

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={product}
        onHide={() => setProducts(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Edit Tags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Product Tags</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>test 1</option>
                  <option>test 2</option>
                </Form.Select>
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
               
                <Col lg={12} className={`${cx.rightft}`}>
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
        show={events}
        onHide={() => setEvents(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Edit Timed Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Name</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Developer testing" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Name Localized</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="developer testing" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Type</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Set Fixed Price</option>
                   <option>test 1</option>
                  <option>test 2</option>
                  <option>test 3</option>
                </Form.Select>
               
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Fixed Price (SAR)</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="Number"  />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Start Date</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="Date" placeholder="2021-01-11"/>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>End Date </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="date" placeholder="2021-01-27" />
              </Col>
            </Form.Group>
      
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Start Hour</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option value="">-- Choose time from --</option>
              <option value="00">12 AM</option>
							<option value="01">01 AM</option>
							<option value="02">02 AM</option>
							<option value="03">03 AM</option>
			        <option value="04">04 AM</option>
							<option value="05">05 AM</option>
							<option value="06">06 AM</option>
							<option value="07">07 AM</option>
							<option value="08">08 AM</option>
							<option value="09">09 AM</option>
							<option value="10">10 AM</option>
							<option value="11">11 AM</option>
							<option value="12">12 PM</option>
							<option value="13">01 PM</option>
							<option value="14">02 PM</option>
							<option value="15">03 PM</option>
							<option value="16">04 PM</option>
							<option value="17">05 PM</option>
							<option value="18">06 PM</option>
							<option value="19">07 PM</option>
							<option value="20">08 PM</option>
							<option value="21">09 PM</option>
							<option value="22">10 PM</option>
							<option value="23">11 PM</option>

                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>End Hour</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option value="">-- Choose time to --</option>
              <option value="00">12 AM</option>
							<option value="01">01 AM</option>
							<option value="02">02 AM</option>
							<option value="03">03 AM</option>
			        <option value="04">04 AM</option>
							<option value="05">05 AM</option>
							<option value="06">06 AM</option>
							<option value="07">07 AM</option>
							<option value="08">08 AM</option>
							<option value="09">09 AM</option>
							<option value="10">10 AM</option>
							<option value="11">11 AM</option>
							<option value="12">12 PM</option>
							<option value="13">01 PM</option>
							<option value="14">02 PM</option>
							<option value="15">03 PM</option>
							<option value="16">04 PM</option>
							<option value="17">05 PM</option>
							<option value="18">06 PM</option>
							<option value="19">07 PM</option>
							<option value="20">08 PM</option>
							<option value="21">09 PM</option>
							<option value="22">10 PM</option>
							<option value="23">11 PM</option>

                </Form.Select>
              </Col>
              </Form.Group>

            <Form.Group
              className={`row ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Applies On Days</Form.Label>
              </Col>
              <Col lg={8}>
                <Row className={`${cx.checkboxRow}`}>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Monday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Tuesday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Wednesday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Thrusday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Friday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Saturday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Sunday
                    </label>
                  </Col>
                  <Col lg={4}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span>  Monday
                    </label>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Applies On Order Types</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Dine In</option>
                   <option>Pick up</option>
                  <option>Delivery</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Priority</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="Number"  />
              </Col>
            </Form.Group>

       
            
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                  <button type="button" className={`${style.bgremove}`}>
                    Delete Timed Event
                  </button>
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`}onClick={handleClose4}>
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
