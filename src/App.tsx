import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Combos from "./pages/Promotion/Combos/Combos";
import Coupons from "./pages/Promotion/Coupons/Coupons";
import Discount from "./pages/Promotion/Discount/Discount";
import TimedEvents from "./pages/Promotion/Timedevents/Timedevents";
import CashiersReports from "./pages/Reports/CashiersReports/CashiersReports";
import CategoriesSalesDetailsReports from "./pages/Reports/CategoriesSalesReports/CategoriesSalesDetailsReports";
import CategoriesSalesReports from "./pages/Reports/CategoriesSalesReports/CategoriesSalesReports";
import CustomerSalesReports from "./pages/Reports/CustomerSalesReports/CustomerSalesReports";
import Inventory from "./pages/Reports/Inventory/Inventory";
import Miscellaneous from "./pages/Reports/Miscellaneous/Miscellaneous";
import PaymentReports from "./pages/Reports/PaymentReports/PaymentReports";
import ProductSalesReports from "./pages/Reports/ProductSalesReports/ProductSalesReports";
import Sales from "./pages/Reports/Sales/Sales";
import Customers from "./pages/Sales/Customers/Customers";
import OrderDetails from "./pages/Sales/Orderdetails/Orderdetails";
import Orders from "./pages/Sales/Orders/Orders";
import Sessions from "./pages/Sales/Sessions/Sessions";
import SessionsDetails from "./pages/Sales/Sessionsdetails/Sessionsdetails";
import Cashiers from "./pages/Settings/Cashiers/Cashiers";
import Employes from "./pages/Settings/Employes/Employes";
import FLoors from "./pages/Settings/Floors/Floors.module";
import Roles from "./pages/Settings/Roles/Roles";
import Taxes from "./pages/Settings/Taxes/Taxes";
import Payment from "./pages/Settings/Payment/Payment"
import Delivery from "./pages/Settings/Delivery/Delivery";
import ItemsSidebar from "./pages/Inventory/Items/Items";
import Suppliers from "./pages/Inventory/Suppliers/Suppliers";
import Tags from "./pages/Settings/Tags/Tags";
import Devices from "./pages/Settings/Devices/Devices";
import Branch from "./pages/Settings/branch/Branch";
import Purchase from "./pages/Inventory/Purchaseorder/Purchase";
import Puchaseorder from "./pages/Inventory/Purchaseorder/Purhaseorder";
import Transfer from "./pages/Inventory/Transfer/Transfer";
import Transferorder from "./pages/Inventory/Transfer/Transferorder";
import { CreateBranch } from "./pages/Settings/branch/Createbranch";
import Acounting from "./pages/Settings/branch/Acounting";
import Category from "./pages/Menu/Category/Category";
import Products from "./pages/Menu/Products/Products";
import Modifier from "./pages/Menu/Modifier/Modifier";
import Display from "./pages/Menu/Display/Display";
import Role from "./pages/Menu/Role/Role";
import Branches from "./pages/Settings/Delivery/Branches";
import Categorydetails from "./pages/Menu/Category/Categorydetails";
import Categorylist from "./pages/Menu/Category/Categorylist";
import Addproducts from "./pages/Menu/Products/Addproducts";
import Sessionsorder from "./pages/Sales/Sessions/Sessionsorder";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Addcombos from "./pages/Promotion/Combos/Addcombos";
import Customerdetails from "./pages/Sales/Customerdetails/Customerdetails";
import Combosdetails from "./pages/Promotion/Combosdetails/Combosdetails";
import Productsdetails from "./pages/Menu/Products/Productsdetails";
import Modifieroption from "./pages/Menu/Modifieroption/Modifieroption";
import Branchdetails from "./pages/Settings/branch/Branchdetails";
import Addcoupons from "./pages/Promotion/Coupons/Addcoupons";
import Reservations from "./pages/Settings/Reservations/Reservations";
import Reasons from "./pages/Settings/Reasons/Reasons";
import Tagdetails from "./pages/Settings/Tags/TagDetails";
import Warehouses from "./pages/Settings/Warehouses/Warehouses";
import Kitchenflows from "./pages/Settings/KitchenFlows/Kitchenflows.module";
import Kitchenflowsdetails from "./pages/Settings/KitchenFlows/Kitchenflowsdetails";
import Charges from "./pages/Settings/Charges/Charges";
import Giftcard from "./pages/Settings/Giftcard/Giftcard";
import Giftcarddetails from "./pages/Settings/Giftcard/Giftcarddetails";
import Timedetails from "./pages/Promotion/Timedevents/Timedetails";
import Devicesdetails from "./pages/Settings/Devices/Devicesdetails";
import Generalsettings from "./pages/Settings/Generalsettings/Generalsettings";
import MyReports from "./pages/Reports/MyReports/MyReports";
import AddMyReports from "./pages/Reports/MyReports/AddMyReports";
function App() {
  return (
    <>
      <Router basename="/designer/dot/">
        <div>
          <Switch>

            <Route path="/" exact>
              <Login />
            </Route>

            <Route exact path="/sales/orders">
              <Orders />
            </Route>

            <Route exact path="/sales/orders/order-details">
              <OrderDetails />
            </Route>

            <Route exact path="/sales/customers">
              <Customers />
            </Route>
            <Route exact path="/sales/customers/customers-details">
              <Customerdetails />
            </Route>
            <Route exact path="/sales/sessions">
              <Sessions />
            </Route>
            <Route exact path="/sales/sessions/sessions-details">
              <SessionsDetails />
            </Route>
            <Route exact path="/promotion/coupons">
              <Coupons />
            </Route>
            <Route exact path="/promotion/coupons/add-coupons">
              <Addcoupons />
            </Route>

            <Route exact path="/promotion/discount">
              <Discount />
            </Route>
            <Route exact path="/promotion/timed-events">
              <TimedEvents />
            </Route>
            <Route exact path="/promotion/timed-events/timedetails">
              <Timedetails />
            </Route>
            <Route exact path="/promotion/combos">
              <Combos />
            </Route>
            <Route exact path="/promotion/combos/combos-details">
              <Combosdetails />
            </Route>


            <Route exact path="/reports/sale">
              <Sales />
            </Route>
            <Route exact path="/reports/category-sales-report">
              <CategoriesSalesReports />
            </Route>
            <Route exact path="/reports/category-sales-details-report">
              <CategoriesSalesDetailsReports />
            </Route>
            <Route exact path="/reports/customer-sales-report">
              <CustomerSalesReports />
            </Route>
            <Route exact path="/reports/product-sales-report">
              <ProductSalesReports />
            </Route>
            <Route exact path="/reports/payment-report">
              <PaymentReports />
            </Route>
            <Route exact path="/reports/cashiers-report">
              <CashiersReports />
            </Route>
            <Route exact path="/reports/inventory">
              <Inventory />
            </Route>
            <Route exact path="/reports/miscellaneous">
              <Miscellaneous />
            </Route>

            <Route exact path="/reports/myreports">
              <MyReports />
            </Route>
            <Route exact path="/reports/myreports/addmyreports">
              <AddMyReports />
            </Route>

            <Route exact path="/settings/roles">
              <Roles />
            </Route>
            <Route exact path="/settings/employes">
              <Employes />
            </Route>
            <Route exact path="/settings/cashiers">
              <Cashiers />
            </Route>
            <Route exact path="/settings/taxes">
              <Taxes />
            </Route>
            <Route exact path="/settings/floors">
              <FLoors />
            </Route>
            <Route exact path="/settings/payment">
              <Payment />
            </Route>

            <Route exact path="/settings/delivery">
              <Delivery />
            </Route>

            <Route exact path="/settings/Generalsettings">
              <Generalsettings />
            </Route>

            <Route exact path="/inventory/items">
              <ItemsSidebar />
            </Route>

            <Route exact path="/inventory/suppliers">
              <Suppliers />
            </Route>
            <Route exact path="/settings/tags">
              <Tags />
            </Route>
            <Route exact path="/settings/tags/tagdetails">
              <Tagdetails />
            </Route>

            <Route exact path="/settings/devices">
              <Devices />
            </Route>

            <Route exact path="/settings/devices/devicesdetails">
              <Devicesdetails />
            </Route>


            <Route exact path="/settings/reservations">
              <Reservations />
            </Route>
            <Route exact path="/settings/warehouses">
              <Warehouses />
            </Route>
            {/* <Route exact path="/settings/branch">
             <Branch/>
             
            </Route> */}

            <Route exact path="/settings/reasons">
              <Reasons />
            </Route>


            <Route exact path="/inventory/purchase">
              <Purchase />
            </Route>
            <Route exact path="/inventory/purchase/purchaseorder">
              <Puchaseorder />
            </Route>
            <Route exact path="/inventory/transfer">
              <Transfer />
            </Route>

            <Route exact path="/inventory/transfer/transferorder">
              <Transferorder />
            </Route>

            <Route exact path="/settings/branch">
              <Branch />
            </Route>
            <Route exact path="/menu/setting/branch/branchdetails">
              <Branchdetails />
            </Route>
            <Route exact path="/settings/branch/add-branch">
              <CreateBranch />
            </Route>
            <Route exact path="/settings/branch/acounting">
              <Acounting />
            </Route>


            <Route exact path="/settings/kitchenflows">
              <Kitchenflows />
            </Route>
            <Route exact path="/settings/kitchenflows/kitchenflowsdetails">
              <Kitchenflowsdetails />
            </Route>

            <Route exact path="/settings/charges">
              <Charges />
            </Route>

            <Route exact path="/settings/giftcard">
              <Giftcard />
            </Route>
            <Route exact path="/settings/giftcard/giftcarddetails">
              <Giftcarddetails />
            </Route>
            <Route exact path="/menu/category">
              <Category />
            </Route>


            <Route exact path="/menu/products">
              <Products />
            </Route>

            <Route exact path="/menu/products/productsdetails">
              <Productsdetails />
            </Route>
            <Route exact path="/menu/modifier">
              <Modifier />
            </Route>

            <Route exact path="/menu/modifieroption">
              <Modifieroption />
            </Route>


            <Route exact path="/menu/display">
              <Display />
            </Route>
            <Route exact path="/menu/role">
              <Role />
            </Route>
            <Route exact path="/settings/delivery/branches">
              <Branches />
            </Route>

            <Route exact path="/menu/category/categorydetails">
              <Categorydetails />
            </Route>

            <Route exact path="/menu/category/categorylist">
              <Categorylist />
            </Route>


            <Route exact path="/menu/products/addproducts">
              <Addproducts />
            </Route>


            <Route exact path="/sales/sessions/sessionsorder">
              <Sessionsorder />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/dashboard/profile">
              <Profile />
            </Route>

            <Route exact path="/Promotion/combos/addcombos">
              <Addcombos />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
