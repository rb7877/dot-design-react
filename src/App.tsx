import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './pages/Navigation/Navigation';
import Orders from './pages/Orders/Orders';
import Ordersdetails from './pages/Ordersdetails/Ordersdetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='orders/:id' element={<Ordersdetails />} />
      </Route>
    </Routes>
  );
};

export default App;
