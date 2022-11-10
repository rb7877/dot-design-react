import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import st from '../../style.module.scss';
import cx from './Sidebar.module.scss';
import { MdOutlineMenuOpen } from "react-icons/md";
import { useContext, useState } from "react";
import GlobalContext from "../../store/global-context";
import { Accordion, Button } from "react-bootstrap"

import logo from "../../images/logo.svg";
import line from "../../images/line.svg";

import menuIcon1 from "../../images/menu-icon-dashboard.svg";
import menuIcon2 from "../../images/menu-icon-order.svg";
import menuIcon3 from "../../images/menu-icon-today.svg";
import menuIcon4 from "../../images/menu-icon-profile.svg";
import menuIcon5 from "../../images/menu-icon-report.svg";
import menuIcon6 from "../../images/menu-icon-inventory.svg";
import menuIcon7 from "../../images/menu-icon-menu.svg";
import menuIcon8 from "../../images/menu-icon-setting.svg";
import menuIcon9 from "../../images/menu-icon-shop.svg";

const Sidebar = (props: any) => {
  const param = useLocation();
  console.log(param, "param")
  const globalCtx = useContext(GlobalContext);
  const [reportsList, setReportsList] = useState(param.pathname.includes('reports'));
  const [inventoryList, setInventoryList] = useState(param.pathname.includes('inventory'));
  const [menuList, setMenuList] = useState(param.pathname.includes('menu'));
  const [manageList, setManageList] = useState(param.pathname.includes('manage'));

  // useEffect(() => {
  //   if (salesList) {

  //   }

  //   if (promotionList) {

  //   }
  //   if (reportsList) {

  //   }
  //   if (menuList) {

  //   }
  //   if (inventoryList) {

  //   }
  //   if (settingsList) {

  //   }

  // }, [salesList, promotionList, reportsList, menuList, inventoryList, settingsList])


  return (
    <>
      <aside className={`${cx.sidebarBody} ${globalCtx.showMenu ? cx.show : ''}`}>
        <div className={`${cx.hideBg}`} onClick={() => { globalCtx.displayMenu(globalCtx.showMenu) }}></div>
        <div className={`${cx.sidebarMain}`}>
          <div className={`${cx.logoBox}`}>
            <NavLink className={`${cx.navlogo}`} to="/">
              <img src={logo} className={`${cx.logoIcon}`} alt="logo" />
              <img src={line} className={`${cx.line}`} alt="line" />
            </NavLink>
          </div>

          <div className={`${cx.menuList}`}>
            <ul className={`${cx.scroll}`}>


              <li>
                <NavLink className={`${cx.signleMenu}`} to="/dashboard">
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon1} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Dashboard</div>
                </NavLink>
              </li>

              <li>
                <NavLink className={`${cx.signleMenu}`} to="/orders">
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon2} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Orders</div>
                </NavLink>
              </li>

              <li>
                <NavLink className={`${cx.signleMenu}`} to="/today-orders">
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon3} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Today’s Orders</div>
                </NavLink>
              </li>

              <li>
                <NavLink className={`${cx.signleMenu}`} to="/customers">
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon4} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Customer</div>
                </NavLink>
              </li>

              <li className={`${reportsList ? `${cx.active}` : ''}`}>
                <Button
                  type="button"
                  onClick={() => {
                    setReportsList(!reportsList);
                  }}
                >
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon5} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Reports</div>
                </Button>
                <ul className={`${cx.first}`}>
                  <li>
                    <NavLink to="/reports/menu1">
                      <div className={`${cx.menuName}`}>Menu 1</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className={`${inventoryList ? `${cx.active}` : ''}`}>
                <Button type="button" onClick={() => { setInventoryList(!inventoryList) }}>
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon6} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Inventory</div>
                </Button>
                <ul className={`${cx.first}`}>
                  <li>
                    <NavLink to="/inventory/items">
                      <div className={`${cx.menuName}`}>Items</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/suppliers">
                      <div className={`${cx.menuName}`}>Suppliers</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/purchase-orders">
                      <div className={`${cx.menuName}`}>Purchase Orders</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/transfer-orders">
                      <div className={`${cx.menuName}`}>Transfer Orders</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/inventory-count">
                      <div className={`${cx.menuName}`}>Inventory Count</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/purchasing">
                      <div className={`${cx.menuName}`}>Purchasing</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/transfers">
                      <div className={`${cx.menuName}`}>Transfers</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className={`${menuList ? `${cx.active}` : ''}`}>
                <Button type="button" onClick={() => { setMenuList(!menuList) }}>
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon7} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Menu</div>
                </Button>
                <ul className={`${cx.first}`}>
                  <li>
                    <NavLink to="/menu/menu1">
                      <div className={`${cx.menuName}`}>Menu 1</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className={`${manageList ? `${cx.active}` : ''}`}>
                <Button type="button" onClick={() => { setManageList(!manageList) }}>
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon8} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Manage</div>
                </Button>
                <ul className={`${cx.first}`}>
                  <li>
                    <NavLink to="/manage/menu1">
                      <div className={`${cx.menuName}`}>Menu 1</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink className={`${cx.signleMenu}`} to="/marketplace">
                  <div className={`${cx.menuIcon}`}>
                    <img src={menuIcon9} className={`${cx.icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Marketplace</div>
                </NavLink>
              </li>


            </ul>




          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
