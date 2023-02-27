import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import Overview from './pages/overview/Overview';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';

import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';

function App() {
  return (

    <BrowserRouter>
       <Navbar />  
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
