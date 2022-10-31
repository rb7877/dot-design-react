import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customer from './pages/Customer/Customer';
import Customerdetails from './pages/Customerdetails/Customerdetails';
import Login from './pages/Login/Login';
import Navigation from './pages/Navigation/Navigation';
import Orders from './pages/Orders/Orders';
import Ordersdetails from './pages/Ordersdetails/Ordersdetails';
import Todayorders from './pages/Todayorders/Todayorders';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='orders/:id' element={<Ordersdetails />} />
        <Route path='today-orders' element={<Todayorders />} />
        <Route path='customers' element={<Customer />} />
        <Route path='customers-details' element={<Customerdetails />} />
      </Route>
    </Routes>
  );
};

export default App;
