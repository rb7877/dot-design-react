import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Costadjustment from './pages/Costadjustment/Costadjustment';
import Costadjustmentdetails from './pages/Costadjustmentdetails/Costadjustmentdetails';
import Countsheet from './pages/Countsheet/Countsheet';
import Countsheetdetails from './pages/Countsheetdetails/Countsheetdetails';
import Customer from './pages/Customer/Customer';
import Customerdetails from './pages/Customerdetails/Customerdetails';
import Inventorycategories from './pages/Inventorycategories/Inventorycategories';
import Inventorycount from './pages/Inventorycount/Inventorycount';
import Inventorycountdetails from './pages/Inventorycountdetails/Inventorycountdetails';
import Inventorymore from './pages/Inventorymore/Inventorymore';
import Items from './pages/Items/Items';
import Itemsdetails from './pages/Itemsdetails/Itemsdetails';
import Login from './pages/Login/Login';
import Navigation from './pages/Navigation/Navigation';
import Orders from './pages/Orders/Orders';
import Ordersdetails from './pages/Ordersdetails/Ordersdetails';
import Ordertransaction from './pages/Ordertransaction/Ordertransaction';
import Ordertransactiondetails from './pages/Ordertransactiondetails/Ordertransactiondetails';
import Production from './pages/Production/Production';
import Productiondetails from './pages/Productiondetails/Productiondetails';
import Purchaseorders from './pages/Purchaseorders/Purchaseorders';
import Purchaseordersdetails from './pages/Purchaseordersdetails/Purchaseordersdetails';
import Purchasing from './pages/Purchasing/Purchasing';
import Purchasingdetails from './pages/Purchasingdetails/Purchasingdetails';
import Quantityadjustment from './pages/Quantityadjustment/Quantityadjustment';
import Quantityadjustmentdetails from './pages/Quantityadjustmentdetails/Quantityadjustmentdetails';
import Spotcheck from './pages/Spotcheck/Spotcheck';
import Spotcheckdetails from './pages/Spotcheckdetails/Spotcheckdetails';
import Suppliers from './pages/Suppliers/Suppliers';
import Suppliersdetails from './pages/Suppliersdetails/Suppliersdetails';
import Todayorders from './pages/Todayorders/Todayorders';
import Transferorders from './pages/Transferorders/Transferorders';
import Transferordersdetails from './pages/Transferordersdetails/Transferordersdetails';
import Transfers from './pages/Transfers/Transfers';
import Transfersdetails from './pages/Transfersdetails/Transfersdetails';
import Warehouses from './pages/Warehouses/Warehouses';
import Warehousesdetails from './pages/Warehousesdetails/Warehousesdetails';

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
        <Route path='inventory/more' element={<Inventorymore />} />
        <Route path='inventory/quantity-adjustment' element={<Quantityadjustment />} />
        <Route path='inventory/quantity-adjustment/:id' element={<Quantityadjustmentdetails />} />
        <Route path='inventory/cost-adjustment' element={<Costadjustment />} />
        <Route path='inventory/cost-adjustment/:id' element={<Costadjustmentdetails />} />
        <Route path='inventory/order-transaction' element={<Ordertransaction />} />
        <Route path='inventory/order-transaction/:id' element={<Ordertransactiondetails />} />
        <Route path='inventory/inventory-categories' element={<Inventorycategories />} />
        <Route path='inventory/inventory-warehouses' element={<Warehouses />} />
        <Route path='inventory/inventory-warehouses/:id' element={<Warehousesdetails />} />
        <Route path='inventory/inventory-spotcheck' element={<Spotcheck />} />
        <Route path='inventory/inventory-spotcheck/:id' element={<Spotcheckdetails />} />
        <Route path='inventory/inventory-countsheet' element={<Countsheet />} />
        <Route path='inventory/inventory-countsheet/:id' element={<Countsheetdetails />} />
      </Route>
    </Routes>
  );
};

export default App;
