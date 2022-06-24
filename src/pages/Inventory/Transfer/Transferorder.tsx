import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Transfer.module.scss";
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
    col1: "1",
    col2: "Service",
     col3: "15%",
    col4: "Branches(0)",
    col5:'---',
   },
   {
    id: 1,
    col1: "2",
    col2: "Service",
     col3: "15%",
    col4: "Branches(0)",
    col5:'---',
   },
   {
    id: 1,
    col1: "3",
    col2: "Service",
     col3: "15%",
    col4: "Branches(0)",
    col5:'---',
   },
 
  
];

export default function Transferorder() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [addTaxgroupShow, setTaxgroup] = useState(false);
const[editTaxCustomer,setEditTaxCustomer]=useState(false);
  const[editGroupTaxCustomer,setEditGruopTaxCustomer]=useState(false)

  const columns = [
    {
      name: "No",
      selector: (row: any) => row.col1,
        sortable: true,
        width: "80px",
    },
    {
      name: "Name",
      selector: (row: any) => row.col2,
      sortable: true,
    },
    
    {
      name: "Amount",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    {
      name: "Linked Branches",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row: any) => row.col5,
      sortable: true,
      cell: () => (
        <div className={`${cx.action}`}>
          <img 
            src={ActionEdit}
            className={`${cx.actionIcon}`}
            alt="img"/>
          <img src={ActionDelete}  className={`${cx.actionIcon}`} alt="img"/>
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

          <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
                <h5>Transfer Order Closed</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
             
                <button
                  className={`btn ${style.width100}`}
                  onClick={() => setAddCustomer(true)}
                >
                NewPurchase Order
                </button>
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
                <Form.Label> Warehouse Name</Form.Label>
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
                <Form.Label>Destination</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Enter you fill" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Business Date</Form.Label>
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
                <Form.Label>Creator</Form.Label>
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
                <Form.Label>Created At</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select>
                  <option>Yes</option>
                </Form.Select>
              </Col>
            </Form.Group>
          
            
                   </Form>
     


              </Card.Body>
            </Card>
          <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
                
                <h5>Purchase Order Invoice Items</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
            
                <button
                  className={`btn ${style.width100}`}
                  onClick={() => setTaxgroup(true)}
                >
                 +Add Item
                </button>
              </Col>
            </Row>
          </Card.Title>
              <Card.Body>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>SKU</th>
                      <th></th>
                      <th></th>
                      <th>Quantity</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item 11</td>
                      <td>0</td>
                      <td></td>
                      <td></td>
                      <td>0</td>
                    </tr>
                    
                    <tr>
                      <td>Item 11</td>
                      <td>124</td>
                      <td></td>
                      <td></td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Item 11</td>
                      <td>124</td>
                      <td></td>
                      <td></td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Item 11</td>
                      <td>124</td>
                      <td></td>
                      <td></td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Item 11</td>
                      <td>124</td>
                      <td></td>
                      <td></td>
                       <td>0</td>
                    </tr>
                    
                    
                  </tbody>
                </table>
              </div>
               
              </Card.Body>
            </Card>

            
           
          </section>
        <Footer />


       









    </>
  );
}
