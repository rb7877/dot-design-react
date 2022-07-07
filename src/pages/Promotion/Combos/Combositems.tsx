
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Combos.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Row, Col ,Form,Tab,Tabs} from "react-bootstrap";
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
const data = [
  {
    id: 1,
    col0:"1",
    col1: "Test",
    col2: "Cashier",
     col3: "Cashier",
    col4: "Cashier",
    col5:"Cashier",
   },]
export default function Combositems() {
  
  const [filterText, setFilterText] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredItems = data.filter(
    (item) =>
      item.col2 && item.col2.toLowerCase().includes(filterText.toLowerCase())
  );
  const columns = [
    { name: "No",
      selector: (row: any) => row.col0,
        sortable: true,
    },
  
  
    {
        name: "Name",
      selector: (row: any) => row.col1,
      sortable: true,
    },
    
    {
      name: "Upgradable",
      selector: (row: any) => row.col3,
      sortable: true,
    },
    
    {
      name: "Option",
      selector: (row: any) => row.col5,
      sortable: true,
    },
    
    {
      name: "Action",
      selector: (row: any) => row.col6,
      sortable: true,
      cell: () => (
        <div className={`${cx.action}`}>
          <NavLink to=""><img
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
  };function handlePageChange(page: any) {
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
    <>
        <Header />
        <Sidebar />
          <section className={`${style.pageWrapper}`}>
          <Card className="mb-4">
              <Card.Title>
                  <Row className={`align-items-center ${style.rowTitle}`}>
                    <Col className={`${style.rowTitleLeft}`} lg={6}>
                      <h5>
                        <NavLink to="/Promotion/combos/" className={`${style.back}`}>Back</NavLink>
                        Add Combos</h5>
                    </Col>
                    <Col className={`${style.rowTitleRight}`} lg={6}>
                    
                    </Col>
                  </Row>
              </Card.Title>
            
              
            </Card>

            {/* <Card className="mb-4"> */}
            <Card.Body>
         
            <div className={`${cx.tabsSection}`}>
	<Tabs defaultActiveKey="Basicinformation" id="uncontrolled-tab-example" className="mb-3">
		<Tab eventKey="BasicInformation" title="Basic information">
    
		</Tab>
		<Tab eventKey="ComboItems" title="Combo Items ">
    <div className={`${table.dataTableBox}`}>
              <Box sx={{ width: 1 }}>
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  subHeader
                  subHeaderAlign={Alignment.LEFT}
                  persistTableHead
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
		</Tab>
    <Tab eventKey="UnitsOptions" title="UnitsOptions ">

   </Tab>
<Tab eventKey="PriceandSizes" title="Price and Sizes ">

</Tab>
	</Tabs>
</div>
            
            
            
            
        
            
            
     
     
     
                   </Card.Body>
            {/* </Card> */}

         </section>
        <Footer />
    </>
  );
}
}