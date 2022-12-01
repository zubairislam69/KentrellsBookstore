//import './App.css';
import React, {useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Books from './components/pages/Books';
import Checkout from './components/pages/Checkout';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';
import Holiday from './components/pages/Holiday';
import Logout from './components/pages/Logout';
import { UserContext } from './components/pages/UserContext';
import { UserInfoContext } from './components/pages/UserInfoContext';
import Search from './components/Search';

function App() {
  const [user, setUser] = useState()
  const [userInfo, setUserInfo] = useState()
  const [product, setProduct] = useState([])
  const [orderInfo, setOrderInfo] = useState()
  const [CartItems, setCart] = useState([]);

  const handleAddProducts = (product) => {
    const ProductExist = CartItems.find((item) => item.bookID === product.bookID);

    if (ProductExist){
      setCart(CartItems.map((item) => item.bookID === product.bookID ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    } else{
      setCart([...CartItems, {...product, quantity: 1}])
    }
  }

  const handleRemoveProducts = (product) => {
    const ProductExist = CartItems.find((item) => item.bookID === product.bookID);
    if(ProductExist.quantity === 1){
      setCart(CartItems.filter((item) => item.bookID !== product.bookID));
    } else{
      setCart(CartItems.map((item) => item.bookID === product.bookID ?
      {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      );
    }
  }
    
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}> 
        <Navbar />
      </UserContext.Provider>
      <div className="container">

        <Routes >
          <Route path="/" element={<Home 
          CartItems={CartItems}
          handleAddProducts={handleAddProducts}
          handleRemoveProducts={handleRemoveProducts}
          
          />}
             />
          <Route path="/books"
            element={
              <Books
                CartItems={CartItems}
                handleAddProducts={handleAddProducts}
                handleRemoveProducts={handleRemoveProducts}
              />} />
          
          <Route path="/checkout" exact
            element={
                <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                  <Checkout
                    CartItems={CartItems}
                    handleAddProducts={handleAddProducts}
                    handleRemoveProducts={handleRemoveProducts} />
                </UserInfoContext.Provider>
            } />

          <Route path="/holiday"
            element={
              <Holiday
                CartItems={CartItems}
                handleAddProducts={handleAddProducts}
                handleRemoveProducts={handleRemoveProducts}
              />} />
            
          
          <Route path="/login" element={
            <UserContext.Provider value={{ user, setUser }}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo}}>
                    <Login />
              </UserInfoContext.Provider>
            </UserContext.Provider>
          }/>

          <Route path="/cart" element={
              <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <Cart
                  CartItems={CartItems}
                  setCart={setCart}
                  handleAddProducts={handleAddProducts}
                  handleRemoveProducts={handleRemoveProducts} />
              </UserInfoContext.Provider>
          } />

          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search"
            element={
              <Search
                CartItems={CartItems}
                handleAddProducts={handleAddProducts}
                handleRemoveProducts={handleRemoveProducts} />
              } />

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
