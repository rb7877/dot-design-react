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
                    
                                       
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
