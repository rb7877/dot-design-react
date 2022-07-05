import React, { useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import style from '../../style.module.scss';
import { MdOutlineMenuOpen } from "react-icons/md";
import { useContext, useState } from "react";
import GlobalContext from "../../store/global-context";
import logo from "../../images/logo.svg";
import line from "../../images/line.svg";

import { Accordion, Button } from "react-bootstrap"

const Sidebar = (props: any) => {
  const param = useLocation();
  const history = useHistory();
  console.log(param, "param")
  const globalCtx = useContext(GlobalContext);
  const [salesList, setSalesList] = useState(param.pathname.includes('sales'));
  const [promotionList, setPromotionList] = useState(param.pathname.includes('promotion'));
  const [reportsList, setReportsList] = useState(param.pathname.includes('reports'));
  const [menuList, setMenuList] = useState(param.pathname.includes('menu'));
  const [inventoryList, setInventoryList] = useState(param.pathname.includes('inventory'));
  const [settingsList, setSettingsList] = useState(param.pathname.includes('settings'));

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
      <aside className={`${style.sidebarBody} ${globalCtx.showMenu ? style.show : ''}`}>
        <div className={`${style.hideBg}`} onClick={() => { globalCtx.displayMenu(globalCtx.showMenu) }}></div>
        <div className={`${style.sidebarMain}`}>
          <div className={`${style.logoBox}`}>
            <NavLink className={`${style.navlogo}`} to="/">
              <img src={logo} className={`${style.logoIcon}`} alt="logo" />
              <img src={line} className={`${style.line}`} alt="line" />
            </NavLink>
          </div>

          <div className={`${style.menuList}`}>
            <ul className={`${style.scroll}`}>


              <li>
                <NavLink className={`${style.signleMenu}`} to="/dashboard">
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.87988 18.1501V16.0801" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M12 18.1498V14.0098" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M17.1201 18.1497V11.9297" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M14.1904 5.84961H17.1204V8.76961" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Dashboard</div>
                </NavLink>
              </li>

              <li className={`${salesList ? `${style.active}` : ''}`}>
                <Button type="button" onClick={() => { setSalesList(!salesList) }}>
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.87988 18.1501V16.0801" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M12 18.1498V14.0098" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M17.1201 18.1497V11.9297" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M14.1904 5.84961H17.1204V8.76961" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Sales</div>
                </Button>
                <ul className={`${style.first}`}>
                  <li>
                    <NavLink to="/sales/orders">
                      <div className={`${style.menuName}`}>Orders</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sales/customers">
                      <div className={`${style.menuName}`}>Customers</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sales/sessions">
                      <div className={`${style.menuName}`}>Sessions</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className={`${promotionList ? `${style.active}` : ''}`}>
                <Button type="button" onClick={() => { setPromotionList(!promotionList) }}>
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.57031 15.2704L15.1103 8.73047" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.98001 10.3701C9.65932 10.3701 10.21 9.81948 10.21 9.14017C10.21 8.46086 9.65932 7.91016 8.98001 7.91016C8.3007 7.91016 7.75 8.46086 7.75 9.14017C7.75 9.81948 8.3007 10.3701 8.98001 10.3701Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.52 16.0899C16.1993 16.0899 16.75 15.5392 16.75 14.8599C16.75 14.1806 16.1993 13.6299 15.52 13.6299C14.8407 13.6299 14.29 14.1806 14.29 14.8599C14.29 15.5392 14.8407 16.0899 15.52 16.0899Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Promotion</div>
                </Button>
                <ul className={`${style.first}`}>
                  <li>
                    <NavLink to="/promotion/combos">
                      <div className={`${style.menuName}`}>Combos</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/promotion/coupons">
                      <div className={`${style.menuName}`}>Coupons</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/promotion/discount">
                      <div className={`${style.menuName}`}>Discount</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/promotion/timed-events">
                      <div className={`${style.menuName}`}>Timed Events</div>
                    </NavLink>
                  </li>
                </ul>
              </li>


              <li className={`${reportsList ? `${style.active}` : ''}`}>
                <Button type="button" onClick={() => { setReportsList(!reportsList) }}>
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12.2002H15" stroke="#4D4D4D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 16.2002H12.38" stroke="#4D4D4D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="#4D4D4D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16 4.01953C19.33 4.19953 21 5.42953 21 9.99953V15.9995C21 19.9995 20 21.9995 15 21.9995H9C4 21.9995 3 19.9995 3 15.9995V9.99953C3 5.43953 4.67 4.19953 8 4.01953" stroke="#4D4D4D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Reports</div>
                </Button>
                <ul className={`${style.first}`}>
                  <li>
                    <NavLink to="/reports/sale">
                      <div className={`${style.menuName}`}>Sales</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reports/inventory">
                      <div className={`${style.menuName}`}>Inventoy</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reports/miscellaneous">
                      <div className={`${style.menuName}`}>Miscellaneous</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <div className={`${style.menuName}`}>Timed Events</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <div className={`${style.menuName}`}>My Reports</div>
                    </NavLink>
                  </li>
                </ul>
              </li>


              <li className={`${menuList ? `${style.active}` : ''}`}>
                <Button type="button" onClick={() => { setMenuList(!menuList) }}>
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3701 8.87988H17.6201" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.37988 8.87988L7.12988 9.62988L9.37988 7.37988" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.3701 15.8799H17.6201" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.37988 15.8799L7.12988 16.6299L9.37988 14.3799" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Menu</div>
                </Button>
                <ul className={`${style.first}`}>
                  <li>
                    <NavLink to="/menu/category">
                      <div className={`${style.menuName}`}>Category</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu/products">
                      <div className={`${style.menuName}`}>Products</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu/modifier">
                      <div className={`${style.menuName}`}>Modifiers</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu/modifieroption">
                      <div className={`${style.menuName}`}>Modifier Options</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu/display">
                      <div className={`${style.menuName}`}>Display</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu/role">
                      <div className={`${style.menuName}`}>Role Manager</div>
                    </NavLink>
                  </li>
                </ul>
              </li>


              <li className={`${inventoryList ? `${style.active}` : ''}`}>
                <Button type="button" onClick={() => { setInventoryList(!inventoryList) }}>
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.4704" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 21.61V12.54" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.92963 2.48L4.58963 5.45003C3.37963 6.12003 2.38965 7.80001 2.38965 9.18001V14.83C2.38965 16.21 3.37963 17.89 4.58963 18.56L9.92963 21.53C11.0696 22.16 12.9396 22.16 14.0796 21.53L19.4196 18.56C20.6296 17.89 21.6196 16.21 21.6196 14.83V9.18001C21.6196 7.80001 20.6296 6.12003 19.4196 5.45003L14.0796 2.48C12.9296 1.84 11.0696 1.84 9.92963 2.48Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.9998 13.2396V9.57965L7.50977 4.09961" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Inventory</div>
                </Button>
                <ul className={`${style.first}`}>
                  <li>
                    <NavLink to="/inventory/items">
                      <div className={`${style.menuName}`}>Items</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/suppliers">
                      <div className={`${style.menuName}`}>Suppliers</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/purchase">
                      <div className={`${style.menuName}`}>Purchase Orders</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory/transfer">
                      <div className={`${style.menuName}`}>Transfers</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <div className={`${style.menuName}`}>Warehouses</div>
                    </NavLink>
                  </li>
                </ul>
              </li>


              <li className={`${settingsList ? `${style.active}` : ''}`}>
                <Button type="button" onClick={() => { setSettingsList(!settingsList) }}>
                  <div className={`${style.menuIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#4D4D4D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z" stroke="#4D4D4D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className={`${style.menuName}`}>Settings</div>
                </Button>
                <ul className={`${style.first}`}>
                  <li>
                    <NavLink to="/settings/roles">
                      <div className={`${style.menuName}`}>Roles</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/employes">
                      <div className={`${style.menuName}`}>Employes</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/cashiers">
                      <div className={`${style.menuName}`}>Cashiers</div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/settings/taxes">
                      <div className={`${style.menuName}`}>Taxes</div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/settings/floors">
                      <div className={`${style.menuName}`}>Floors</div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/settings/payment">
                      <div className={`${style.menuName}`}>Payments Methods</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/delivery">
                      <div className={`${style.menuName}`}>Delivery Zones</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/tags">
                      <div className={`${style.menuName}`}>Tags</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/branch">
                      <div className={`${style.menuName}`}>Branches</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/devices">
                      <div className={`${style.menuName}`}>Devices</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings/reservations">
                      <div className={`${style.menuName}`}>Reservations</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <div className={`${style.menuName}`}>Market Place</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>




          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
