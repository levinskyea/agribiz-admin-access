import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAndServices from './pages/ProductsAndServices';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import DonateNow from './pages/DonateNow';
import ErrorPage from './pages/ErrorPage';
import AdminDashboard from './pages/AdminDashboard';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/productsandservices" element={<ProductsAndServices/>} />
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/donatenow" element={<DonateNow/>}/>
            <Route exact path="/dashboard" element={<AdminDashboard/>} />
            <Route exact path="/contactus" element={<ContactUs/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
