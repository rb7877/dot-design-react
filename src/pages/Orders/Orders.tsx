import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Orders.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from 'react-select';
import { MultiSelect } from "react-multi-select-component";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { BsPlusLg } from 'react-icons/bs';
import icon1 from "../../images/icon-branch.svg";
import icon2 from "../../images/icon-calendar.svg";
import icon3 from "../../images/icon-call.svg";
import icon4 from "../../images/icon-export.svg";

interface Data {
  reference: string;
  number: string;
  branch: string;
  customer: string;
  status: string;
  source: string;
  total: string;
  business: string;
}

const rows = [
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "reference",
    numeric: false,
    disablePadding: true,
    label: "Reference",
  },
  {
    id: "number",
    numeric: true,
    disablePadding: false,
    label: "Number",
  },
  {
    id: "branch",
    numeric: true,
    disablePadding: false,
    label: "Branch",
  },
  {
    id: "customer",
    numeric: true,
    disablePadding: false,
    label: "Customer",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "source",
    numeric: true,
    disablePadding: false,
    label: "Source",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  {
    id: "business",
    numeric: true,
    disablePadding: false,
    label: "Business Date",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>
          <div className={`${table.mainTitleRow}`}>
            <Row>
              <Col lg={7}>
                <ul className={`${table.filterList}`}>
                  <li><button className={`btn ${table.filterBtn} ${table.active}`}>All</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>Today</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>Draft</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>Pending</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>Archive</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>Ahead</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>Call Center</button> </li>
                  <li><button className={`btn ${table.filterBtn}`}>API</button> </li>
                </ul>
              </Col>
              <Col lg={5}>
                <ul className={`${table.rightActionIcons}`}>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsPlusLg />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Order Items</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Order Payment
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Order Tags</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <></>
      )}
    </Toolbar>
  );
};

function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("branch");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.branch);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const TablePaginationActions = (event: any) => {
    console.log(event, "TablePaginationActions")
    return <>
      <div className={`${table.pagination}`}></div></>
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  function defaultLabelDisplayedRows({ from, to, count }: any) { return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`; }
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.reference);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.reference)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.reference}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.reference}
                      </TableCell>
                      <TableCell align="left">{row.number}</TableCell>
                      <TableCell align="left">{row.branch}</TableCell>
                      <TableCell align="left">{row.customer}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.source}</TableCell>
                      <TableCell align="left">{row.total}</TableCell>
                      <TableCell align="left">{row.business}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          count={rows.length}
          // component={TablePaginationActions}
          labelDisplayedRows={defaultLabelDisplayedRows}
          labelRowsPerPage=" "
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[]}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default function Orders() {
  const [lgShow, setLgShow] = useState(false);

  //for close button
  const handleClose = () => {
    setLgShow(false);
  };

  const Control = ({ children, ...props }: ControlProps) => {
    // @ts-ignore
    const { emoji, onEmojiClick } = props.selectProps;
    const style = { cursor: 'pointer' };

    return (
      <components.Control {...props}>
        <span onMouseDown={onEmojiClick} style={style}>
          <img src={icon1} className={`${st.icon}`} />
        </span>
        {children}
      </components.Control>
    );
  };

  const options = [
    {
      value: '1', label: 'Orders',
    },
    {
      value: '2', label: 'Orders Items',
    },
    {
      value: '3', label: 'Orders Payment',
    },
    {
      value: '4', label: 'Orders 1',
    },
  ]
  const [selected, setSelected] = useState([]);
  const customValueRenderer = (selected: any, options: any) => {
    return <><img src={icon1} className={`${st.icon}`} />  All Branches</>

  };
  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <Row className={`align-items-center ${st.rowTitle}`}>
            <Col className={`col-12 ${st.rowTitleLeft}`} lg={3}>
              <h5>Orders</h5>
            </Col>
            <Col className={`col-12 ${st.rowTitleRight}`} lg={9}>

              <div className={`${st.selectDropdown}`}>
                <MultiSelect
                  options={options}
                  valueRenderer={customValueRenderer}
                  value={selected}
                  onChange={setSelected}
                  labelledBy={"All Braches"}
                  isCreatable={true}
                  closeOnChangedValue={true}
                />
              </div>
              {/* 
              <div className={`${st.selectDropdown}`}>
                <Select
                  isSearchable={true}
                  options={options}
                  isMulti
                  components={{ Control }} placeholder="All Braches"
                />
              </div> */}

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={icon2} className={`${st.icon}`} />
                  Business Date
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Order Items</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Order Payment
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Order Tags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={icon3} className={`${st.icon}`} />
                  Export
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Order Items</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Order Payment
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Order Tags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={icon4} className={`${st.icon}`} />
                  New Call Center Order
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Order Items</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Order Payment
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Order Tags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>


        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>

              <div className={`${table.dataTableBox}`}>
                <Box sx={{ width: 1 }}>
                  <EnhancedTable />
                </Box>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

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
                <Form.Label>Reference</Form.Label>
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
                <Form.Label>Business Date</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="date" placeholder="DD/MM/YY" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Customer Phone</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Customer Phone" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Order Tag</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="Order Tag" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Source</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>All</option>
                  <option>Cashier</option>
                  <option>Call Centre</option>
                  <option>Api</option>
                  <option>Waiter</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Status</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Active</option>
                  <option>Void</option>
                  <option>Done</option>
                </Form.Select>
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
                  <option>All</option>
                  <option>Dine In</option>
                  <option>Tackeaway</option>
                  <option>Void</option>
                  <option>Done</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Has Discount</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Has Discount">
                  <option>All</option>
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
                  <button type="button" className={`${st.bgremove}`}>
                    Clear
                  </button>
                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button
                    type="button"
                    className={`btn ${cx.close}`}
                    onClick={handleClose}
                  >
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
