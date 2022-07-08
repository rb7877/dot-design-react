import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Reservations.module.scss";
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
  { id: "1",
    col: "Branch1",
    co2: "B01",
    co3:"O",
    co4: "30 Minutes",
   
   },
  
  
];

export default function Reservations() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredItems = data.filter(
    (item) =>
      item.col && item.col.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [deleteCustomerShow, setdeleteCustomer] = useState(false);
  
  const columns = [
   
    {
      name: "Branch",
      selector: (row: any) => row.col,
      sortable: true,
    },
    {
      name: " Reference",
      selector: (row: any) => row.co2,
      sortable: true,
    },
    {
      name: " Number of Tables",
      selector: (row: any) => row.co3,
      sortable: true,
    },
    {
      name: "Reservation Duration",
      selector: (row: any) => row.co4,
      sortable: true,
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
      </Row>
    );
  };

  const handleClose=()=>{
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
                <h5>Reservations</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
                
              <button className={`btn ${style.width50}`}
                 onClick={() => setLgShow(true)} >Add Branches</button>

              <button className={`btn ${style.width50}`}
               onClick={() =>  setdeleteCustomer(true)}>Disable Reservations</button>
              
             
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
                 
                  persistTableHead
                  pagination
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
            <Modal.Title id="example-modal-sizes-title-lg">Add Branches</Modal.Title>
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
                  <option>Pending</option>
                  <option>Active</option>
                  <option>Void</option>
                  <option>Done</option>

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
        className={`${cx.ctsPopup} ${cx.importBody}`}
        show={deleteCustomerShow}
        onHide={() => setdeleteCustomer(false)}
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
            <p>Are you sure you want to disable reservations for all branches?</p>
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
