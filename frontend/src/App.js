//import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Books from './components/pages/Books';
import Cart from './components/pages/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
