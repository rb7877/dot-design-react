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
    col1: "#3",
    col2: "Products Cost",
    col3: "Dates : , Branch :",
    col4: "	2022-07-07 18:26:12",
    col5: "pending",
   
   },
   {
    id: 2,
    col1: "#2",
    col2: "Inventory Items History",
    col3: "Dates : 2022-07-07 - 2022-07-09, Branch : 0",
    col4: "2022-07-07 17:59:17",
    col5: "pending",
   
   },  {
    id: 3,
    col1: "#1",
    col2: "Product Sales",
    col3: "Dates : 2022-07-07 - 2022-07-09, Branch : 0",
    col4: "2022-07-07 16:10:42",
    col5: "ready",
    
   },
   
];


export default function MyReports() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

  const [editShow, setEditShow] = useState(false);


  const columns = [
    {
      name: "#",
      selector: (row: any) => row.col1,
        sortable: true,
    },
  
    {
      name: "Name",
      selector: (row: any) => row.col2,
        sortable: true,
    },
  
  
    {
      name: "DETAILS",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    
    {
      name: "CREATED AT",
      selector: (row: any) => row.col4,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row: any) => row.col5,
      sortable: true,
    },
   
    
    {
      name: "Action",
      selector: (row: any) => row.col6,
      sortable: true,
      cell: () => (
        <div className={`${cx.action}`}>
          <NavLink to="/reports/myreports/addmyreports"><img
            onClick={() => setEditShow(true)}
            src={ActionEdit}
            className={`${cx.actionIcon}`}
            alt="img"/>
          </NavLink>
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
          
        </Col>
      </Row>
    );
  };

  return (
    <>
    
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          
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
