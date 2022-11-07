import React, { Fragment, useState } from "react";
import { Button, Modal, Row, Col, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import cx from './Modals.module.scss';
import Select from 'react-select';
import { FilterDropdown, SingleFilterDropdown } from "../Dropdown/Dropdowns";
import { tagoptions, customertagoptions, customertimezone, itemoption, ingredientsoptions } from '../../constants/dropdownconstants'
import { AiFillInfoCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";



const Modals = (props: any) => {
  const options = [
    {
      value: '1', label: 'Pick up',
    },
    {
      value: '2', label: 'Delivery',
    },
  ]
  const deliveryzone = [
    {
      value: '1', label: 'Shipping',
    },
    {
      value: '2', label: 'Ordered',
    },
  ]
  const [ordertype, setOrderType] = useState('')
  const [advanceOptions, setadvanceOptions] = useState(false)
  const [inventoryItems, setinventoryItems] = useState(false)
  const orderTypehandler = (event: any) => {
    setOrderType(event.label)
  }

  let sizeadvanceoptions = advanceOptions ? 6 : 12;


  const [subshow, setsubShow] = useState(false);
  const [submodalName, setsubModalName] = useState('');
  const subdeliveryAddress = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow")
    setsubModalName(modalname)
    setsubShow(status);
  }
  const subhandleClose = () => {
    setsubShow(false);
    setsubModalName('');
  };

  return (
    <>
      {/* START New Call Center Order */}
      {props.modalName === 'order call' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Call Center Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Customer Phone</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>New Customer Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Oder Type</Form.Label>
                  <Select
                    isSearchable={true}
                    options={options}
                    onChange={(e) => { orderTypehandler(e) }}
                    placeholder="Pick up"
                  />

                </Form.Group>
              </Col>


              {ordertype === 'Delivery' && <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Address</Form.Label>
                  <button className={`${cx.addressBtn}`} onClick={() => { subdeliveryAddress('delivery address', true) }}>Add New Address?</button>
                </Form.Group>
              </Col>}

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Branch</Form.Label>
                  <Form.Select>
                    <option>Mall 1</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END New Call Center Order */}



      {/* START Delivery Address */}
      {submodalName === 'delivery address' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" type="text" style={{ height: '150px' }} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Delivery Zone</Form.Label>
                  <Select
                    isSearchable={true}
                    options={deliveryzone}
                    onChange={(e) => { orderTypehandler(e) }}
                    placeholder="Choose...
                    "
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={subhandleClose}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Delivery Address */}



      {/* START Order Filter */}
      {
        props.modalName === 'order filter' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Reference</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Reference After</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Business Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Order Filter */}


      {/* START Order add tags Filter */}
      {
        props.modalName === 'order add tags' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Tags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Tags</Form.Label>
                  <FilterDropdown options={tagoptions} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
              Close
            </Button>
            <Button className={`${cx.btnSubmit}`}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      }
      {/* END Order add tags Filter */}


      {/* START Todays Order Filter */}
      {
        props.modalName === 'today order filter' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Reference</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Reference After</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Business Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Todays Order Filter */}

      {/* START Customer's Filter */}
      {
        props.modalName === 'customer filter' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Tag</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Customer's Filter */}



      {/* START add customer Filter */}
      {
        props.modalName === 'add customer' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Customers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs Full Name.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={6} lg={6}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Phone
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs unique phone number.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select>
                    <option>Saudi Arabia (+966)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={6}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.labelHide}`}>
                    .
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Email
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs unique email address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END add customer Filter */}


      {/* START edit customer Filter */}
      {
        props.modalName === 'edit customer' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Customers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs Full Name.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" placeholder="Hunger Station" />
                </Form.Group>
              </Col>
              <Col md={6} lg={6}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Phone
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs unique phone number.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select>
                    <option>Saudi Arabia (+966)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={6}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.labelHide}`}>
                    .
                  </Form.Label>
                  <Form.Control type="text" placeholder="0113381056" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Email
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs unique email address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Birth Date
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs birth date.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Gender
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The customerʼs birth date.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END edit customer Filter */}


      {/* START Customer add tags Filter */}
      {
        props.modalName === 'customer add tags' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Tags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To assign tags to this Customer.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={tagoptions} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Customer add tags Filter */}




      {/* START Customer create address Filter */}
      {
        props.modalName === 'customer create address' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The name of the address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Description
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To describe the address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control as="textarea" style={{ height: '150px' }} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Delivery Zone
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the delivery zone.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={customertimezone} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Customer create address Filter */}




      {/* START create item Filter */}       {/*Inventory*/}
      {
        props.modalName === 'create item' &&
        <Modal scrollable className={`${cx.ctsModal} ${advanceOptions ? cx.ctsModalSize : ''}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The name of the address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name Localized
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Enter the localized name in a 2nd language of your choice.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Row>

                  <Col md={7} lg={7}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label>
                        SKU
                        {['top'].map((placement) => (
                          <OverlayTrigger key={placement} overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Stock keeping unit, a unique code for your item.
                            </Tooltip>}>
                            <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                          </OverlayTrigger>
                        ))}
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md={5} lg={5}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label className={`${cx.labelHide}`}>
                        .
                      </Form.Label>
                      <button type="button" className="form-control">Generate SKU</button>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Category
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          You can add an item to a category, like vegetables.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={itemoption} />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is stored, example: Box or KG.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Ingredient Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is used in your products ingredients, example: GRAM or ML.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage To Ingredient
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The conversion factor between storage unit and ingredient unit, example: 1000.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          If you donʼt have a fixed cost for this item it will be calculated from purchase transactions.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Barcode
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            Unique barcode to identify with barcode scanners.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Fragment>}

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Cost
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Fixed cost per storage unit.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Minimum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The minimum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>

                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Par Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The Initial quantity when you create a purchase order or transfer order.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>


                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Maximum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The maximum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Fragment>}


            </Row>
          </Modal.Body>
          <Modal.Footer>
            {advanceOptions ? <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(false) }}>Basic Options</NavLink></div> : <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(true) }}>Advanced Options</NavLink></div>}
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END create item Filter */}


      {/* START edit item Filter */}       {/*Inventory*/}
      {
        props.modalName === 'edit item' &&
        <Modal scrollable className={`${cx.ctsModal} ${advanceOptions ? cx.ctsModalSize : ''}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The name of the address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name Localized
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Enter the localized name in a 2nd language of your choice.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Row>

                  <Col md={7} lg={7}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label>
                        SKU
                        {['top'].map((placement) => (
                          <OverlayTrigger key={placement} overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Stock keeping unit, a unique code for your item.
                            </Tooltip>}>
                            <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                          </OverlayTrigger>
                        ))}
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md={5} lg={5}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label className={`${cx.labelHide}`}>
                        .
                      </Form.Label>
                      <button type="button" className="form-control">Generate SKU</button>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Category
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          You can add an item to a category, like vegetables.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={itemoption} />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is stored, example: Box or KG.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Ingredient Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is used in your products ingredients, example: GRAM or ML.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage To Ingredient
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The conversion factor between storage unit and ingredient unit, example: 1000.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          If you donʼt have a fixed cost for this item it will be calculated from purchase transactions.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Barcode
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            Unique barcode to identify with barcode scanners.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Fragment>}

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Cost
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Fixed cost per storage unit.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Minimum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The minimum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>

                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Par Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The Initial quantity when you create a purchase order or transfer order.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>


                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Maximum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The maximum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Fragment>}


            </Row>
          </Modal.Body>
          <Modal.Footer>
            {advanceOptions ? <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(false) }}>Basic Options</NavLink></div> : <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(true) }}>Advanced Options</NavLink></div>}
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END edit item Filter */}



      {/* START Items Filter */}
      {
        props.modalName === 'item filter' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>SKU</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Tag</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Category</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Supplier</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Stock Product
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Deleted
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Updated After</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Items Filter */}


      {/* START Import Items Filter */}
      {
        props.modalName === 'import item' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>SKU</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Tag</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Category</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Supplier</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Stock Product
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Deleted
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Updated After</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END  Import Items Filter */}


      {/* START items add tags */}
      {
        props.modalName === 'items add tags' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Tags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the needed tags.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={tagoptions} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END items add tags */}



      {/* START item ingredients */}
      {
        props.modalName === 'item ingredients' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Items</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  {inventoryItems ? <Form.Label className="d-block">
                    Items by Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select a tag contains the Items.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}

                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select Items?</NavLink>
                  </Form.Label> : <Form.Label className="d-block">
                    Items
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the Items.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by tags?</NavLink>
                  </Form.Label>
                  }

                  <FilterDropdown options={ingredientsoptions} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END item ingredients */}


      {/* START item suppliers */}
      {
        props.modalName === 'item suppliers' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Suppliers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className="d-block">
                    Suppliers
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the needed suppliers.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={ingredientsoptions} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END item suppliers */}



      {/* START item branches */}
      {
        props.modalName === 'item branches' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Branches</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  {inventoryItems ? <Form.Label className="d-block">
                    Branches
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the needed branches.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}

                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select by Tags?</NavLink>
                  </Form.Label> : <Form.Label className="d-block">
                    Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select a tag that contains branches.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by branches ?</NavLink>
                  </Form.Label>
                  }
                  <FilterDropdown options={ingredientsoptions} />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Minimum Level (kg)
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The minimum level allowed in the selected branch or warehouse.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Par Level (kg)
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The Initial quantity when you create a purchase order or transfer order.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Maximum Level (kg)
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The maximum level allowed in the selected branch or warehouse.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END item branches */}



      {/* START New Purchase Orders */}
      {
        props.modalName === 'new purchase orders' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Purchase Orders</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Supplier
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Choose a supplier to request items from.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={customertimezone} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Destination
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Where requested items will be received.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={customertimezone} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Delivery Date
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Date
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Notes
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          You can make additional notes to this transaction.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control as="textarea" type="text" style={{ height: '150px' }} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END New Purchase Orders */}


      {/* START Customer's Filter */}
      {
        props.modalName === 'purchase order filter' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Reference</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Business Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>


              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  {inventoryItems ?
                    <Form.Label className="d-block">
                      Destination
                      <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select Items?</NavLink>
                    </Form.Label> :
                    <Form.Label className="d-block">
                      Branch
                      <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by tags?</NavLink>
                    </Form.Label>
                  }
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Supplier</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Customer's Filter */}

      


      {/* START Create Purchasing */}
      {
        props.modalName === 'create purchasing' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Purchasing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Invoice Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Items</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Create Purchasing */}

      

      {/* START purchasing delete */}
      {
        props.modalName === 'purchasing delete' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>This PO is not fully received, are you sure you want to close it?</Form.Label>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`} style={{ backgroundColor:'#FA8072', borderColor:'#FA8072' }}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END purchasing delete */}



      {/* START New Transfer Order */}
      {
        props.modalName === 'new transfer orders' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Transfer Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Warehouse
                  {['top'].map((placement) => (
                    <OverlayTrigger key={placement} overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Select the warehouse where items will be sent from.
                      </Tooltip>}>
                      <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>
            
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Destination
                  {['top'].map((placement) => (
                    <OverlayTrigger key={placement} overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Branch or Warehouse where items will be sent to.
                      </Tooltip>}>
                      <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END New Transfer Order */}

      


      {/* START Transfer Order Filter */}
      {
        props.modalName === 'transfer orders filter' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Reference
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Date
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Status
                </Form.Label>
                <Form.Select>
                  <option value="1">Any</option>
                  <option value="2">Draft</option>
                  <option value="3">Pending</option>
                  <option value="3">Closed</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Supplier
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Warehouse
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>


            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>
                Apply
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      }
      {/* END Transfer Order Filter */}

    </>
  );
};

export default Modals;
