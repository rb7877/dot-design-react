
import React from "react";
import style from "../../../style.module.scss";
import cx from "./Category.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Row, Col ,Form,Tab,Tabs} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";

import CategoryIcon1 from "../../../images/category-icon1.svg";
import CategoryIcon2 from "../../../images/category-icon2.svg";
import CategoryIcon3 from "../../../images/category-icon3.svg";
import CategoryIcon4 from "../../../images/category-icon4.svg";
import CategoryIcon5 from "../../../images/category-icon5.svg";
import CategoryIcon6 from "../../../images/category-icon6.svg";
import CategoryIcon7 from "../../../images/category-icon7.svg";
import CategoryIcon8 from "../../../images/category-icon8.svg";
import CategoryIcon9 from "../../../images/category-icon9.svg";
import CategoryIcon10 from "../../../images/category-icon10.svg";
import CategoryIcon11 from "../../../images/category-icon11.svg";
import CategoryIcon12 from "../../../images/category-icon12.svg";
import CategoryIcon13 from "../../../images/category-icon13.svg";
import CategoryIcon14 from "../../../images/category-icon14.svg";
import CategoryIcon15 from "../../../images/category-icon15.svg";
import CategoryIcon16 from "../../../images/category-icon16.svg";
import CategoryIcon17 from "../../../images/category-icon17.svg";
import CategoryIcon18 from "../../../images/category-icon18.svg";
import CategoryIcon19 from "../../../images/category-icon19.svg";
import CategoryIcon20 from "../../../images/category-icon20.svg";
import CategoryIcon21 from "../../../images/category-icon21.svg";
import CategoryIcon22 from "../../../images/category-icon22.svg";
import CategoryIcon23 from "../../../images/category-icon23.svg";
import CategoryIcon24 from "../../../images/category-icon24.svg";
import CategoryIcon25 from "../../../images/category-icon25.svg";
import CategoryIcon26 from "../../../images/category-icon26.svg";
import CategoryIcon27 from "../../../images/category-icon27.svg";
import CategoryIcon28 from "../../../images/category-icon28.svg";
import CategoryIcon29 from "../../../images/category-icon29.svg";
import CategoryIcon30 from "../../../images/category-icon30.svg";

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

      
    <ul className={`${cx.categoryImage}`}>
        <li><img src={CategoryIcon1} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon2} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon3} className={`${cx.categoryIcon}`} alt="img" />  </li>
        <li><img src={CategoryIcon4} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon5} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon6} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon7} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon8} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon9} className={`${cx.categoryIcon}`} alt="img" /></li>
        <li><img src={CategoryIcon10} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon11} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon12} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon13} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon14} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon15} className={`${cx.categoryIcon}`} alt="img" /> </li>
      </ul>  

      <ul className={`${cx.categoryImage}`}>
        <li><img src={CategoryIcon16} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon17} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon18} className={`${cx.categoryIcon}`} alt="img" />  </li>
        <li><img src={CategoryIcon19} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon20} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon21} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon22} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon23} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon24} className={`${cx.categoryIcon}`} alt="img" /></li>
        <li><img src={CategoryIcon25} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon26} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon27} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon28} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon29} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon30} className={`${cx.categoryIcon}`} alt="img" /> </li>
      </ul> 

      <ul className={`${cx.categoryImage}`}>
        <li><img src={CategoryIcon1} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon2} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon3} className={`${cx.categoryIcon}`} alt="img" />  </li>
        <li><img src={CategoryIcon4} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon5} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon6} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon7} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon8} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon9} className={`${cx.categoryIcon}`} alt="img" /></li>
        <li><img src={CategoryIcon10} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon11} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon12} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon13} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon14} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon15} className={`${cx.categoryIcon}`} alt="img" /> </li>
      </ul>  

      <ul className={`${cx.categoryImage}`}>
        <li><img src={CategoryIcon16} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon17} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon18} className={`${cx.categoryIcon}`} alt="img" />  </li>
        <li><img src={CategoryIcon19} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon20} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon21} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon22} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon23} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon24} className={`${cx.categoryIcon}`} alt="img" /></li>
        <li><img src={CategoryIcon25} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon26} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon27} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon28} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon29} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon30} className={`${cx.categoryIcon}`} alt="img" /> </li>
      </ul> 

      <ul className={`${cx.categoryImage}`}>
        <li><img src={CategoryIcon1} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon2} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon3} className={`${cx.categoryIcon}`} alt="img" />  </li>
        <li><img src={CategoryIcon4} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon5} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon6} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon7} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon8} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon9} className={`${cx.categoryIcon}`} alt="img" /></li>
        <li><img src={CategoryIcon10} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon11} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon12} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon13} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon14} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon15} className={`${cx.categoryIcon}`} alt="img" /> </li>
      </ul>  

      <ul className={`${cx.categoryImage}`}>
        <li><img src={CategoryIcon16} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon17} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon18} className={`${cx.categoryIcon}`} alt="img" />  </li>
        <li><img src={CategoryIcon19} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon20} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon21} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon22} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon23} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon24} className={`${cx.categoryIcon}`} alt="img" /></li>
        <li><img src={CategoryIcon25} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon26} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon27} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon28} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon29} className={`${cx.categoryIcon}`} alt="img" /> </li>
        <li><img src={CategoryIcon30} className={`${cx.categoryIcon}`} alt="img" /> </li>
      </ul> 
  

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
