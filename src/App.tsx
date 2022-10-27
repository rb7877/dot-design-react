import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './pages/Navigation/Navigation';
import Orders from './pages/Orders/Orders';
import Ordersdetails from './pages/Ordersdetails/Ordersdetails';



type Routes = {
  basename: string;
  country: string;
  children: React.ReactNode;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* <Route index element={<Login />} /> */}
        <Route path='/' element={<Orders />} />
        <Route path='/order-details' element={<Ordersdetails />} />
      </Route>
    </Routes>
  );
};

export default App;
