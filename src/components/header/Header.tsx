import React, { useEffect, useState } from "react";
import style from '../../style.module.scss';
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../store/global-context";
import logo from "../../images/logo.svg";

import profile from "../../images/icon-profile.svg";
import infoicon from "../../images/icon-info.svg";

import { Col, Row, InputGroup, FormControl, Dropdown } from "react-bootstrap"

const Header = (props: any) => {
    const globalCtx = useContext(GlobalContext);
    let hideonScroll = globalCtx.showMenu;

    return (<>
        <header className={`${style.mainHeader}`}>
            <Row className={`${style.mobileHeader}`}>
                <Col className="col-3">
                    <GiHamburgerMenu className={`${style.hembugmenu}`} onClick={() => { globalCtx.displayMenu(hideonScroll) }} />
                </Col>
                <Col className="col-6 text-center">

                </Col>
                <Col md={4} lg={6} xl={7} className={`col-3 ${style.headerRight}`}>
                    <ul>
                        <li className={`${style.help}`}>
                            <Dropdown>
                                <Dropdown.Toggle variant="a" id="dropdown-basic">
                                    <div className={`${style.menuTT}`}>
                                        <img src={infoicon} className={`${style.helpImg}`} alt="logo" />
                                    </div>
                                </Dropdown.Toggle>

                                {/* <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu> */}
                            </Dropdown>
                        </li>
                        <li className={`${style.profileBox}`}>
                            <Dropdown>
                                <Dropdown.Toggle variant="a" id="dropdown-basic">
                                    <div className={`${style.menuTT}`}>
                                        <img src={profile} className={`${style.profileImg}`} alt="logo" />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className={`${style.borderM}`} href="#">
                                        <p>User ID : </p>
                                        <h5>157106</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item className={`${style.borderM}`} href="#">
                                        <p>User 1 </p>
                                        <h5>usertester1@gmail.com</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item className={`${style.borderM}`} href="/">
                                        <h5>Logout</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item className={`${style.pSpace}`} href="#">
                                        <h5>00966-920028928</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <h5>Support @Foodict.com</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <h5>Live Chat</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <h5>Knowledge Base</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <h5>System update</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <h5>Feature Suggestion</h5>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <h5>F5 Account : 157106</h5>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* <NavLink variant="a" className={`dropdown-toggle`} id="dropdown-basic" to="/">
                                <img src="images/profile.png" className={`${style.profileImg}`} alt="profile" />
                                <div className={`${style.menuTT}`}>Me</div>
                            </NavLink> */}
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row className={`align-items-center ${style.headerRow}`}>
                <Col md={12} lg={12} xl={12} className={`col-12 ${style.headerMobile} ${globalCtx.showMore ? style.show : ''}`}>
                    <Row className="align-items-center">
                        <Col md={8} lg={6} xl={5} className={`col-9 ${style.headerSearch}`}>
                            <InputGroup className="">
                                <FormControl placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                                <button className={`${style.searchBtn}`}>Search</button>
                            </InputGroup>
                        </Col>
                        <Col md={4} lg={6} xl={7} className={`col-3 ${style.headerRight}`}>
                            <ul>
                                <li className={`${style.help}`}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="a" id="dropdown-basic">
                                            <div className={`${style.menuTT}`}>
                                                <img src={infoicon} className={`${style.helpImg}`} alt="logo" />
                                            </div>
                                        </Dropdown.Toggle>

                                        {/* <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu> */}
                                    </Dropdown>
                                </li>
                                <li className={`${style.profileBox}`}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="a" id="dropdown-basic">
                                            <div className={`${style.menuTT}`}>
                                                <img src={profile} className={`${style.profileImg}`} alt="logo" />
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item className={`${style.borderM}`} href="#">
                                                <p>User ID : </p>
                                                <h5>157106</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item className={`${style.borderM}`} href="#">
                                                <p>User 1 </p>
                                                <h5>usertester1@gmail.com</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item className={`${style.borderM}`} href="/">
                                                <h5>Logout</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item className={`${style.pSpace}`} href="#">
                                                <h5>00966-920028928</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <h5>Support @Foodict.com</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <h5>Live Chat</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <h5>Knowledge Base</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <h5>System update</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <h5>Feature Suggestion</h5>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <h5>F5 Account : 157106</h5>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {/* <NavLink variant="a" className={`dropdown-toggle`} id="dropdown-basic" to="/">
                                        <img src="images/profile.png" className={`${style.profileImg}`} alt="profile" />
                                        <div className={`${style.menuTT}`}>Me</div>
                                    </NavLink> */}
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>

    </>)
}

export default Header;