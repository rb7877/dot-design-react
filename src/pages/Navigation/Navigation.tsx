import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cx from "./Navigation.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";


export default function Navigation() {
    let location = useLocation();
    console.log(location, "useNavigate")
    return <Fragment>
        <div className={`${cx.wrapper}`}>
            {/* {
                window.location.href.includes("/login") ?
                    <Fragment></Fragment> : <Header />
            } */}
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            {/* {window.location.href.includes("/login") ? <Fragment></Fragment> : <Footer />} */}
            {/* if multiply components not showing footer than
        {location.pathname === "/map-listing" || location.pathname === "/component name"  ? <Fragment></Fragment> : <Footer />}  */}
        </div>
    </Fragment>;
}
