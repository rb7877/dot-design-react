import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Combos.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import table from "../../../datatable.module.scss";
import DataTable, { Alignment } from "react-data-table-component";
import { NavLink, useHistory } from "react-router-dom";


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
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 2,
    col1: "2",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 3,
    col1: "3",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 4,
    col1: "4",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 5,
    col1: "5",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 6,
    col1: "6",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 7,
    col1: "7",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 8,
    col1: "8",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 9,
    col1: "9",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 10,
    col1: "10",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
  {
    id: 11,
    col1: "11",
    col2: "Test",
    col3: "Lorem Ipsum",
    col4: "Heavy Food",
    col5: "qwerty1",
    col6: "Test1",
    col7: "12345",
    col8: "12aa4bb1",
    col9: "---",
  },
];

export default function Combos() {
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () =>setLgShow(false);

  const columns = [
    {
      name: "ID",
      selector: (row: any) => row.col1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Name",
      selector: (row: any) => row.col2,
      sortable: true,
      width: "120px",
    },
    {
      name: "Desc",
      selector: (row: any) => row.col3,
      sortable: true,
      width: "150px",
    },
    {
      name: "Category",
      selector: (row: any) => row.col4,
      sortable: true,
      width: "150px",
    },
    {
      name: "Tag",
      selector: (row: any) => row.col5,
      sortable: true,
      width: "150px",
    },
    {
      name: "Event",
      selector: (row: any) => row.col6,
      sortable: true,
      width: "150px",
    },
    {
      name: "I Code",
      selector: (row: any) => row.col7,
      sortable: true,
      width: "150px",
    },
    {
      name: "Barcode",
      selector: (row: any) => row.col8,
      sortable: true,
      width: "150px",
    },
    {
      name: "Action",
      selector: (row: any) => row.col9,
      sortable: true,
      cell: () => (
        <div className={`${cx.action}`}>
          <img
            src={ActionEdit}
            className={`${cx.actionIcon}`}
            alt="img" />
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

  const history = useHistory();
  const rowclickedFunction = () => {
    // console.log("rowClickedFunction")
    history.push('/promotion/combos/combos-details', { params: 'Hello World' })

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
                <h5>Combos</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
                <button
                  className={`btn ${style.width50}`}
                  onClick={() => setLgShow(true)}
                >
                  Filter
                </button>
                <NavLink to="/Promotion/combos/addcombos">
                  <button
                    className={`btn ${style.width50}`} >
                    + Add Combos
                  </button>
                </NavLink>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <Col className={`${style.filterMain}`}>
              {/* Mobile Filter */}
              <Form.Select className={`${style.filterMobile}`} aria-label="Default select example">
                <option>All</option>
                <option value="1">Has Orders</option>
                <option value="2">Blocklisted</option>
                <option value="3">Deleted</option>
              </Form.Select>

              {/* Desktop Filter */}
              <Row className={`${style.filterRowMain}`}>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn active ${style.filterB}`}>All</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Active</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Inactive</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Deleted</button>
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
                  onRowClicked={rowclickedFunction}
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
                <Form.Label>Name</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Qwerty" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Barcode</Form.Label>
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
                <Form.Label>Category</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>All</option>
                  <option>test3</option>
                  <option>testing</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tags</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>All</option>
                  <option>test3</option>
                  <option>testing</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Event</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Select aria-label="Source">
                  <option>All</option>
                  <option>test3</option>
                  <option>testing</option>
                </Form.Select>
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
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`}onClick={handleClose}>
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
