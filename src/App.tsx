import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Coupons from "./pages/Promotion/Coupons/Coupons";
import Discount from "./pages/Promotion/Discount/Discount";
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

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
