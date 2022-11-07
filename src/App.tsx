import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customer from './pages/Customer/Customer';
import Customerdetails from './pages/Customerdetails/Customerdetails';
import Items from './pages/Items/Items';
import Itemsdetails from './pages/Itemsdetails/Itemsdetails';
import Login from './pages/Login/Login';
import Navigation from './pages/Navigation/Navigation';
import Orders from './pages/Orders/Orders';
import Ordersdetails from './pages/Ordersdetails/Ordersdetails';
import Purchaseorders from './pages/Purchaseorders/Purchaseorders';
import Purchaseordersdetails from './pages/Purchaseordersdetails/Purchaseordersdetails';
import Todayorders from './pages/Todayorders/Todayorders';
import Transferorders from './pages/Transferorders/Transferorders';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='orders/:id' element={<Ordersdetails />} />
        <Route path='today-orders' element={<Todayorders />} />
        <Route path='customers' element={<Customer />} />
        <Route path='customers/:id' element={<Customerdetails />} />
        <Route path='inventory/items' element={<Items />} />
        <Route path='inventory/items/:id' element={<Itemsdetails />} />
        <Route path='inventory/purchase-orders' element={<Purchaseorders />} />
        <Route path='inventory/purchase-orders/:id' element={<Purchaseordersdetails />} />
        <Route path='inventory/transfer-orders' element={<Transferorders />} />
      </Route>
    </Routes>
  );
};

export default App;
