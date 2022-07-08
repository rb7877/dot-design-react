import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Devices.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, InputGroup } from "react-bootstrap";
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
    
    col: "Name1",
     col3: "compnay",
    col4: "---",
   },
   {
    col: "Name1",
     col3: "compnay",
    col4: "---",
   },
  
];

export default function Devices() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
 


  const filteredItems = data.filter(
    (item) =>
      item.col && item.col.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  

  

  const columns = [
     {
      name: "Sync",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>2020-04-14</h5>
          <p>08:21:40 PM</p>
        </div>
      ),
    },
    {
      name: "Application",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>kikihjg</h5>
         </div>
      ),
    },
    {
      name: "Code",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>42976013</h5>
         </div>
      ),
    },
    {
      name: "License",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>Cashier</h5>
         </div>
      ),
    },
    {
      name: "Branch",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>3</h5>
         </div>
      ),
    },
    {
      name: "Branch Reference",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>803</h5>
         </div>
      ),
    },
    {
      name: "NAME",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>Windows Laptop</h5>
         </div>
      ),
    },
    {
      name: "Reference Number",
      selector: (row: any) => row.col3,
      sortable: true,
      cell: () => (
        <div className={`${cx.date}`}>
          <h5>009</h5>
         </div>
      ),
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


  const handleClose=()=>{
    setAddCustomer(false)
  }

  const handleClose1=()=>{
    setLgShow(false)
  }
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
                <h5> Devices List</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
              <button
                  className={`btn ${style.width50}`}
                  onClick={() => setLgShow(true)}
                >
                  Filter
                </button>
                <button
                  className={`btn ${style.width100}`}
                  onClick={() => setAddCustomer(true)}
                >
                  + Create Devices
                </button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
          <Col className={`${style.filterMain}`}>
          <Row className={`${style.filterRowMain}`}>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn active ${style.filterB}`}>All</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Cashier</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>KDS</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Notifier</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Display</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Sub Cashier</button>
                </Col>
              </Row>
            </Col>
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
        show={addCustomerShow}
        onHide={() => setAddCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              New Device
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Type</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>All</option>
                  <option>abc</option>
                  <option>a123bc</option>
                </Form.Select>
              </Col>
            </Form.Group>
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
                            <Form.Control type="text" placeholder="" />
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
                <Form.Label>Branch</Form.Label>
              </Col>
            
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>Choose..</option>
                  <option>abc</option>
                  <option>a123bc</option>
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
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Filter
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
           

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Reference</Form.Label>
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
                <Form.Label>Code</Form.Label>
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
                <Form.Label>Type</Form.Label>
              </Col>
            
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>Any</option>
                  <option>abc</option>
                  <option>a123bc</option>
                </Form.Select>
              </Col>
            </Form.Group>
          
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branch</Form.Label>
              </Col>
            
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>Any</option>
                  <option>abc</option>
                  <option>a123bc</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tag</Form.Label>
              </Col>
            
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>Any</option>
                  <option>abc</option>
                  <option>a123bc</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>In Use</Form.Label>
              </Col>
            
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>Any</option>
              <option>Yes</option>
              <option>No</option>
                 
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Online</Form.Label>
              </Col>
            
              <Col lg={8}>
              <Form.Select aria-label="Source">
              <option>Any</option>
              <option>Yes</option>
              <option>No</option>
                 
                </Form.Select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
              <Col lg={6} className={`${cx.leftft}`}>
                  <button type="button" className={`${style.bgremove}`}>Clear</button>
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose1} >
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
