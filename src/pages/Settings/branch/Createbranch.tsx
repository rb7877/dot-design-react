import React , {  useState }from 'react'
import style from "../../../style.module.scss";
import cx from "./Branch.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../../components/header/Header'
import Sidebar from '../../../components/sidebar/Sidebar'
import Footer from '../../../components/footer/Footer'
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";
import { NavLink } from "react-router-dom";


const customStyles = {
  rows: {
    style: {
      minHeight: "55px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const handleButtonClick = () => {
  console.log("clicked");
};


export const CreateBranch=()=> {
  return (
    <>
  <Header />
        <Sidebar />
          <section className={`${style.pageWrapper}`}>

          <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-2 ${cx.backBtn}`} lg={2}>
                <NavLink to="/settings/branch" className="btn">Back</NavLink>
              </Col> 
              <Col className={`col-10 text-center ${style.rowTitleLeft}`} lg={8}>
                <h5>Create Branch</h5>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
          <Form>
                <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>English Name</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Name" />
              </Col>
              </Form.Group>
              <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Arabic Name </Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Logo</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Upload File" />
              </Col>
            </Form.Group>
           
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Latitude</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Latitude" />
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
                <Form.Control type="text" placeholder="Enter Longitude" />
              </Col>
            </Form.Group>
            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
              <Form.Label>Opens from </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option> Select Opens from</option>
                </Form.Select>
                
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
              <Form.Label>Opens to </Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Opens to</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Mobile Number</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Mobile Number" />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Time to prepare receiving requests</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Time to prepare receiving requests " />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Time to prepare delivery requests</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Time to prepare delivery requests " />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Service fee</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Service fee " />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}> 
              <Form.Label>Unavailable order types</Form.Label> 
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Order Type </option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                 
              <Form.Label>Delivery areas</Form.Label>  
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Delivery areas</option>
                </Form.Select>
              </Col>
            </Form.Group>

            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                 
              <Form.Label>Temporary events</Form.Label>  
             
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Temporary events</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
              <Form.Label>Taxes</Form.Label>  
             
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Taxes</option>
                </Form.Select>
                
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
              <Form.Label>Tags</Form.Label>  
             
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Tags</option>
                </Form.Select>
               
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
              <Form.Label>on top of the bill</Form.Label>  
             
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Tags</option>
                </Form.Select>
               
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
              <Form.Label>Below the bill</Form.Label>
             
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Tags</option>
                </Form.Select>
               
              </Col>
            </Form.Group>
        </Form> 
          </Card.Body>
            </Card>
          </section>
          <Footer />


     </>
  );
}
