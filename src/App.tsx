import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Orders from "./pages/Sales/Orders/Orders";


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

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
