import React from "react";
import style from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card,Dropdown, Row, Col } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";

import action from "../../../images/1.svg";

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

const columns = [
  {
    name: "Date",
    selector: (row: any) => row.col1,
    sortable: true,
  },
  {
    name: "Reference",
    selector: (row: any) => row.col2,
    sortable: true,
  },
  {
    name: "Branch",
    selector: (row: any) => row.col3,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: any) => row.col4,
    sortable: true,
  },
  {
    name: "Total",
    selector: (row: any) => row.col5,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row: any) => row.col6,
    sortable: true,
    cell: () => <div className={`${table.action}`}><img src={action} className={`${style.actionImg}`} alt="img" /></div>,
    width:'100px',
  },
];

const data = [
  {
    id: 1,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 2,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 3,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 4,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 5,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 6,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 7,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 8,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 9,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
  {
    id: 10,
    col1: "12020-04-14",
    col2: "xxx2022",
    col3: "Mall 1",
    col4: "$224.00",
    col5: "$224.00",
    col6: "",
  },
];

export default function Orders() {

  const [filterText, setFilterText] = React.useState("");

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );


  return (
    <>
    <Header />
    <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          <Card.Title>
              <Row className={`align-items-center ${style.rowTitle}`}>
                <Col className={`${style.rowTitleLeft}`} lg={6}>
                  <h5>Orders</h5>
                </Col>
                <Col className={`${style.rowTitleRight}`} lg={6}>
                  <button className={`btn`}>Filter</button>
                </Col>
              </Row>
          </Card.Title>
          <Card.Body>
            <div className={`${table.dataTableBox}`}>
              <Box sx={{  width: 1 }}>
                  <DataTable
                    columns={columns}
                    data={filteredItems}
                    subHeader
                    subHeaderAlign={Alignment.LEFT}
                    persistTableHead
                    pagination
                    customStyles={customStyles}
                    //   expandableRows
                    //   expandableRowsComponent={ExpandedComponent}
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
