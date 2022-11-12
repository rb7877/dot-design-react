import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customer from './pages/Customer/Customer';
import Customerdetails from './pages/Customerdetails/Customerdetails';
import Inventorycount from './pages/Inventorycount/Inventorycount';
import Inventorycountdetails from './pages/Inventorycountdetails/Inventorycountdetails';
import Items from './pages/Items/Items';
import Itemsdetails from './pages/Itemsdetails/Itemsdetails';
import Login from './pages/Login/Login';
import Navigation from './pages/Navigation/Navigation';
import Orders from './pages/Orders/Orders';
import Ordersdetails from './pages/Ordersdetails/Ordersdetails';
import Production from './pages/Production/Production';
import Productiondetails from './pages/Productiondetails/Productiondetails';
import Purchaseorders from './pages/Purchaseorders/Purchaseorders';
import Purchaseordersdetails from './pages/Purchaseordersdetails/Purchaseordersdetails';
import Purchasing from './pages/Purchasing/Purchasing';
import Purchasingdetails from './pages/Purchasingdetails/Purchasingdetails';
import Suppliers from './pages/Suppliers/Suppliers';
import Suppliersdetails from './pages/Suppliersdetails/Suppliersdetails';
import Todayorders from './pages/Todayorders/Todayorders';
import Transferorders from './pages/Transferorders/Transferorders';
import Transferordersdetails from './pages/Transferordersdetails/Transferordersdetails';
import Transfers from './pages/Transfers/Transfers';
import Transfersdetails from './pages/Transfersdetails/Transfersdetails';

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
        <Route path='inventory/transfer-orders/:id' element={<Transferordersdetails />} />
        <Route path='inventory/suppliers' element={<Suppliers />} />
        <Route path='inventory/suppliers/:id' element={<Suppliersdetails />} />
        <Route path='inventory/inventory-count' element={<Inventorycount />} />
        <Route path='inventory/inventory-count/:id' element={<Inventorycountdetails />} />
        <Route path='inventory/purchasing' element={<Purchasing />} />
        <Route path='inventory/purchasing/:id' element={<Purchasingdetails />} />
        <Route path='inventory/transfers' element={<Transfers />} />
        <Route path='inventory/transfers/:id' element={<Transfersdetails />} />
        <Route path='inventory/production' element={<Production />} />
        <Route path='inventory/production/:id' element={<Productiondetails />} />
      </Route>
    </Routes>
  );
};

export default App;
