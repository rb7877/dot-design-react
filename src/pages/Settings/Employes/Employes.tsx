import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Employes.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

import Box from "@mui/material/Box";

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

const data = [
  {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
   {
   
    col1: "Test1",
    col2: "Test1@gmail.com",
    col3: "+911-894-912-1",
    col4:"Cashier",
    col5:"----",
    col6:'----',
   
   },
 
];

export default function Employees() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [editCustomerShow, seteditCustomer] = useState(false);

  const columns = [
   
    {
      name: " Name",
      selector: (row: any) => row.col2,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row: any) => row.col3,
      sortable: true,
    },
     {
      name: "Date",
      selector: (row: any) => row.col6,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>2020-04-14</h5>
          <p>08:21:40 PM</p>
        </div>
      ),
    },
    
    {
      name: "Action",
      selector: (row: any) => row.col5,
      sortable: true,
      cell: () => (
        <div className={`${cx.action}`}>
          <img
            onClick={() => seteditCustomer(true)} 
            src={ActionEdit}
            className={`${cx.actionIcon}`}
            alt="img"  />
          <img src={ActionDelete} className={`${cx.actionIcon}`} alt="img" />
        </div>
      ),
      width: "140px",
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Showing",
    rangeSeparatorText: "out of",
  };

  function handlePageChange(page: any) {
    console.log(page, "handlePageChange");
    setCurrentPage(page);
  }

  const handlePerRowsChange = async (newPerPage: any, page: any) => {
    console.log(page, newPerPage, "handlePerRowsChange");
    setPerPage(newPerPage);
  };

  const previewIcon = (
    <button onClick={() => handlePageChange(1)}>Previous</button>
  );
  const previewIconD = <button style={{ display: "none" }}>Previous</button>;
  const nextIconD = <button style={{ display: "none" }}>Next</button>;
  const nextIcon = <button onClick={() => handlePageChange(11)}>Next</button>;

  const getNumberOfPages = (rowCount: number, rowsPerPage: number) =>
    Math.ceil(rowCount / rowsPerPage);

  const pagcomp = (props: any) => {
    console.log(props, "pagcomp");
    const numPages = getNumberOfPages(props.rowCount, props.rowsPerPage);
    const lastIndex = props.currentPage * props.rowsPerPage;
    const firstIndex = lastIndex - props.rowsPerPage + 1;
    const disabledLesser = currentPage === 1;
    const disabledGreater = currentPage === numPages;
    const {
      rowsPerPageText = "Showing",
      rangeSeparatorText = "out of",
      noRowsPerPage = 100,
    } = {
      ...props.defaultComponentOptions,
      ...props.paginationComponentOptions,
    };
    const range =
      currentPage === numPages
        ? `${firstIndex}-${props.rowCount} ${rangeSeparatorText} ${props.rowCount}`
        : `${firstIndex}-${lastIndex} ${rangeSeparatorText} ${props.rowCount}`;
    const handlePrevious = () => handlePageChange(props.currentPage - 1);
    const handleNext = () => handlePageChange(props.currentPage + 1);
    const handleFirst = () => handlePageChange(1);
    const handleLast = () =>
      handlePageChange(getNumberOfPages(props.rowCount, props.rowsPerPage));
    return (
      <Row className={`align-items-center ${table.paggingRow}`}>
        <Col md={6} lg={6} className={`col-12 ${table.rowTitleLeft}`}>
          <h6>
            {rowsPerPageText} {range}
          </h6>
        </Col>

        <Col md={6} lg={6} className={`col-12 ${table.rowTitleRight}`}>
          {/* <Button
              id="pagination-first-page"
              aria-label="First Page"
              aria-disabled={disabledLesser}
              onClick={handleFirst}
              disabled={disabledLesser}
            >
              {props.paginationIconFirstPage}
            </Button> */}

          <Button
            className={`${table.previousBtn} ${table.actBtn}`}
            id="pagination-previous-page"
            aria-label="Previous Page"
            aria-disabled={disabledLesser}
            onClick={handlePrevious}
            disabled={disabledLesser}
          >
            {props.paginationIconPrevious}
          </Button>

          <Button
            className={`${table.nextBtn} ${table.actBtn}`}
            id="pagination-next-page"
            aria-label="Next Page"
            aria-disabled={disabledGreater}
            onClick={handleNext}
            disabled={disabledGreater}
          >
            {props.paginationIconNext}
          </Button>

          {/* <Button
              id="pagination-last-page"
              aria-label="Last Page"
              aria-disabled={disabledGreater}
              onClick={handleLast}
              disabled={disabledGreater}
            >
              {props.paginationIconLastPage}
            </Button> */}
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
                <h5>Employees List</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
              <button
                  className={`btn ${style.width50}`}
                  onClick={() => setLgShow(true)}
                >
                  Filter
                </button>
                <button
                  className={`btn ${style.width50}`}
                  onClick={() => setAddCustomer(true)}
                >+ Add Employees
                </button>
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
                  pagination
                  paginationIconNext={nextIcon}
                  paginationIconPrevious={previewIcon}
                  paginationIconFirstPage={nextIconD}
                  paginationIconLastPage={previewIconD}
                  paginationComponentOptions={paginationComponentOptions}
                  paginationComponent={pagcomp}
                  customStyles={customStyles}
                  paginationDefaultPage={currentPage}
                  onChangeRowsPerPage={handlePerRowsChange}
                  onChangePage={handlePageChange}
                  //   expandableRows
                  //   expandableRowsComponent={ExpandedComponent}
                />{" "}
              </Box>
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
            <Modal.Title id="example-modal-sizes-title-lg">Filter</Modal.Title>
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
                <Form.Control type="text" placeholder="Qwerty" />
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
                <Col lg={6}  className={`${cx.rightft}`}>
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
             Add Employees
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
                <Form.Control type="text" placeholder="Enter Name" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Dial Code</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Dial Code" />
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
                <Form.Control type="text" placeholder="Enter Phone" />
              </Col>
            </Form.Group>
            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Email" />
              </Col>
            </Form.Group>
            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Passwaord</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Password" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Choose Restaurant</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Restaurant</option>
                  <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Choose Branch</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Restaurant</option>
                   <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>
            </Form.Group>
           
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Choose Role</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select role</option>
                  <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Language</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>En</option>
                  <option>urdu</option>
                  <option>abc</option>
                </Form.Select>
              </Col>

            </Form.Group>
            
            <Col lg={12}>
              <Row className={`align-items-center m-0 ${cx.copyRow}`}>
                <Col lg={6} className={`${cx.left}`} >
                  <h5>Roles</h5>
                </Col>
                <Col lg={6} className={`text-end ${cx.right}`} >
                  <button className={`${cx.copyto}`}>Copy To</button>
                </Col>
               
              </Row>
            </Col>

            

          <Form.Group
              className={`row align-items-center p-1 ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Company Role</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Business Roles</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> </Form.Label>
              </Col>
              <Col lg={8}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span> Can Access Current Business ?
                    </label>
                  </Col>
            </Form.Group>
          
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Branch Roles</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center  ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Branch</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                 
                 <button type="button" className={`btn ${cx.clear}`}>
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
        show={editCustomerShow}
        onHide={() => seteditCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Edit Employees
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
                <Form.Control type="text" placeholder="Enter Name" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Dial Code</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Dial Code" />
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
                <Form.Control type="text" placeholder="Enter Phone" />
              </Col>
            </Form.Group>
            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Email" />
              </Col>
            </Form.Group>
            
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Passwaord</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Password" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Choose Restaurant</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Restaurant</option>
                  <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Choose Branch</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select Restaurant</option>
                  <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>
            </Form.Group>
           
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Choose Role</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>Select role</option>
                  <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Language</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>En</option>
                  <option>abc</option>
                  <option>123</option>
                </Form.Select>
              </Col>

            </Form.Group>
            
            <Col lg={12}>
              <Row className={`align-items-center m-0 ${cx.copyRow}`}>
                <Col lg={6} className={`${cx.left}`} >
                  <h5>Roles</h5>
                </Col>
                <Col lg={6} className={`text-end ${cx.right}`} >
                  <button className={`${cx.copyto}`}>Copy To</button>
                </Col>
               
              </Row>
            </Col>

            

          <Form.Group
              className={`row align-items-center p-1 ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Company Role</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Business Roles</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> </Form.Label>
              </Col>
              <Col lg={8}>
                    <label className={`${cx.checkbox}`}>
                      <input type="checkbox" /> 
                      <span className={`${cx.checkmark}`}></span> Can Access Current Business ?
                    </label>
                  </Col>
            </Form.Group>
          
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Branch Roles</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center  ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label> Branch</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter your fill" />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                 
                 <button type="button" className={`btn ${cx.clear}`}>
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


    </>
  );
}
