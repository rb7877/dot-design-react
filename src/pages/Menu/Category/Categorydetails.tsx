
import React from "react";
import style from "../../../style.module.scss";
import cx from "./Category.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Row, Col ,Form,Tab,Tabs} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";
import DataTable from "react-data-table-component";

export default function Categorydetails() {
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
                        <NavLink to="/menu/category/" className={`${style.back}`}>Back</NavLink>
                        Create Categories</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                    
                      <button className={`btn ${style.width100}`}>SaveCategories</button>
                    </Col>
                  </Row>
              </Card.Title>
            
              
            </Card>

            <Card className="mb-4">
            <Card.Body>
         
            <div className={`${cx.tabsSection}`}>
	<Tabs defaultActiveKey="BasicData" id="uncontrolled-tab-example" className="mb-3">
		<Tab eventKey="BasicData" title="Basic Data">
    <Form>
              
                
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>  Name (English )</Form.Label>
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
                  <Form.Label>Name (Arabic )</Form.Label>
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
                  <Form.Label>SKU</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Enter Category SKU" />
                </Col>
              </Form.Group>
  
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Restaurant*</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Select>
                    <option>-- Choose --</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Branch*</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Select>
                    <option>-- Choose --</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Timed Events</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Select>
                    <option>All</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Activate Category</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Select>
                    <option>Yes</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            
              
           </Form>
		</Tab>
		<Tab eventKey="CategoryIcon" title="Category Icon ">

		</Tab>
	</Tabs>
</div>
            
            
            
            
         
          
     
     
                   </Card.Body>
            </Card>

         </section>
        <Footer />
    </>
  );
}
