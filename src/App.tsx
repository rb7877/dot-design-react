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
            <Route exact path="/sales/sessions">
              <Sessions />
            </Route>
            <Route exact path="/sales/sessions/sessions-details">
              <SessionsDetails />
            </Route>
            <Route exact path="/promotion/coupons">
              <Coupons />
            </Route>
            <Route exact path="/promotion/discount">
              <Discount />
            </Route>
            <Route exact path="/promotion/timed-events">
              <TimedEvents />
            </Route>
            <Route exact path="/promotion/combos">
              <Combos />
            </Route>
            <Route exact path="/reports/sales">
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
              <Taxes/>
            </Route>
            <Route exact path="/settings/floors">
              <FLoors/>
            </Route>
            <Route exact path="/settings/payment">
             <Payment/>
            </Route>
            
            <Route exact path="/settings/delivery">
             <Delivery/>
            </Route>

            <Route exact path="/inventory/items">
             <ItemsSidebar/>
            </Route>

            <Route exact path="/inventory/suppliers">
             <Suppliers/>
            </Route>
            <Route exact path="/settings/tags">
             <Tags/>
            </Route>

            <Route exact path="/settings/devices">
             <Devices/>
            </Route>
            {/* <Route exact path="/settings/branch">
             <Branch/>
            </Route> */}
                                       

            <Route exact path="/inventory/purchase">
             <Purchase/>
            </Route>
            <Route exact path="/inventory/purchase/purchaseorder">
             <Puchaseorder/>
             </Route>
             <Route exact path="/inventory/transfer">
             <Transfer/>
            </Route>

            <Route exact path="/inventory/transfer/transferorder">
             <Transferorder/>
             </Route>

             <Route exact path="/settings/branch">
             <Branch/>
            </Route>
            <Route exact path="/settings/branch/add-branch">
             <CreateBranch/>
            </Route> 
            <Route exact path="/settings/branch/acounting">
             <Branch/>
            </Route>      
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
