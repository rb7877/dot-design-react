import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./MyReports.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";
import { NavLink ,useHistory} from "react-router-dom";


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
    col1: "Small",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   },
   {
    id: 2,
    col1: "Small",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   }, {
    id: 3,
    col1: "LWF Double - ل.و.ف. دوبل",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   }, {
    id: 4,
    col1: "Classic Fries كلاسيك فرايز",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   }, {
    id: 5,
    col1: "Party Fries - بارتي فرايز",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   }, {
    id: 6,
    col1: "LWF Signature Fries سقنتشر فرايز",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   }, {
    id: 7,
    col1: "Ice Cream Mango ايسكريم مانجو",
    col2: "N/A",
     col3: "0",
    col4: "Fixed",
   
   },
  
];


export default function AddMyReports() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);

  const history = useHistory();

  const rowclickedFunction = () => {
    // console.log("rowClickedFunction")
    history.push("/menu/products/productsdetails",{params:'Hello World'})
  
  }

  const columns = [
    {
      name: "PRODUCT",
      selector: (row: any) => row.col1,
        sortable: true,
    },
  
  
    {
      name: "SKU",
      selector: (row: any) => row.col2,
      sortable: true,
    },
    
    {
      name: "COST",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    {
      name: "FIXED COST",
      selector: (row: any) => row.col4,
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
   <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
        <Card.Title>
        <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
                <h5>View Report</h5>
              </Col>
              </Row>
        </Card.Title>
          <Card.Body>
         
            <div className={`${table.dataTableBox}`}>
              <Box sx={{ width: 1 }}>
                <DataTable
                  columns={columns}
                  data={filteredItems}
                 
                />{" "}
              </Box>
            </div>
          </Card.Body>
        </Card>
      </section>
      <Footer />



    </>
  );
}
