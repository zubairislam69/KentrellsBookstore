//import './App.css';
import React, {useState } from 'react'
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
import Logout from './components/pages/Logout';
import { UserContext } from './components/pages/UserContext';
import { UserInfoContext } from './components/pages/UserInfoContext';

function App() {
  const [user, setUser] = useState("")
  const [userInfo, setUserInfo] = useState("Hello")

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}> 
        <Navbar />
      </UserContext.Provider>
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            <UserContext.Provider value={{ user, setUser }}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <Login/>
              </UserInfoContext.Provider>
            </UserContext.Provider>
          }/>

          <Route path="/books" element={<Books />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/profile" element={
            <UserContext.Provider value={{ user, setUser}}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <Profile />       
              </UserInfoContext.Provider>
            </UserContext.Provider>
          }/>

          <Route path="/logout" element={
            <UserContext.Provider value={{ user, setUser }}>
              <Logout />
            </UserContext.Provider>
          }/>

        </Routes>
      </div>
    </>
  )
}

export default App;
