import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Modifier.module.scss";
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
     id: 1,
     col1:"Landed Cost",
     col2: "Options (0)",
     col3: "Options (4)",
     col4: "FS",
     col5:"Products (2)",
     col6:"---",
     
   },
   {
    id: 2,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 3,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 4,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 5,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 6,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 7,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 8,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 9,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 10,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 11,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 12,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
  {
    id: 13,
    col1:"Landed Cost",
    col2: "Options (0)",
    col3: "Options (4)",
    col4: "FS",
    col5:"Products (2)",
    col6:"---",
    
  },
   
];

export default function Modifier() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  const handleClose3=()=>{
    setEditCustomer(false)
  }

  const handleClose2=()=>{
    setAddCustomer(false);


  }


  const handleClose=()=>{
    setLgShow(false)
  }



  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [editCustomerShow, setEditCustomer] = useState(false);

  const columns = [
  
    {
      name: "Name",
      selector: (row: any) => row.col1,
      sortable: true,
    },
    {
      name: "Minimum Options",
      selector: (row: any) => row.col2,
      sortable: true,
    },
    {
      name: "Maximum Options",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    {
      name: "Excluded Options",
      selector: (row: any) => row.col4,
      sortable: true,
    },
    {
      name: "Linked Products",
      selector: (row: any) => row.col5,
      sortable: true,
    },
    
    {
      name: "Action",
      selector: (row: any) => row.col6,
      sortable: true,
      cell: () => (
        <div className={`${cx.action}`}>
          <img
            src={ActionEdit}
            className={`${cx.actionIcon}`}
            alt="img" onClick={() => setEditCustomer(true)}
             />
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
                <h5>Modifier</h5>
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
                >
                  Import
                </button>
                <button
                  className={`btn ${style.width100}`}
                  onClick={() => setAddCustomer(true)}
                >
                 + Add Modifier
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
                <Form.Control type="text" placeholder="Enter Name" />
              </Col>
            </Form.Group>
           
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                 
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                    Done
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
            Add Modifiers
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
                <Form.Label>Price</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Price" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Minimum Option</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Minimum Option" />
              </Col>
            </Form.Group>
            
             <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Maximum Option</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Maximum Option" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Excluded Options</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Excluded Options" />
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
                  Done
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
        onHide={() => setEditCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Edit Modifiers
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
                <Form.Label>Price</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Price" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Minimum Option</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Minimum Option" />
              </Col>
            </Form.Group>
            
             <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Maximum Option</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Maximum Option" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Excluded Options</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter Excluded Options" />
              </Col>
            </Form.Group>
           
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
               
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose3}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                  Done
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
