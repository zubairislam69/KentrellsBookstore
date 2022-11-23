//import './App.css';
import React, {useEffect, useState } from 'react'
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

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  return (

  //   <div>
  //     {(typeof backendData.users === 'undefined') ? (
  //       <p>Loading...</p>
  //     ) : (
  //         backendData.users.map((user, i) => (
  //           <p key = {i}> {user} </p>
  //         ))
  //     )
      
      
  //     }
  //   </div>







    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Books />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
