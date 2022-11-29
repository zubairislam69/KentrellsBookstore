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
import Logout from './components/pages/Logout';
import { UserContext } from './components/pages/UserContext';
import { UserInfoContext } from './components/pages/UserInfoContext';
import { OrderInfoContext } from './components/pages/OrderInfoContext';
import Search from './components/Search';
import { CartContext } from './components/CartContext'

function App() {
  const [user, setUser] = useState()
  const [userInfo, setUserInfo] = useState()

  const [product, setProduct] = useState([])
  const [orderInfo, setOrderInfo] = useState()
  const [profileIDCart, setProfileIDCart] = useState()

  
  const [CartItems, setCart] = useState([]);
  console.log("CartItems")

  console.log(CartItems)
  const handleAddProducts = (product) => {
    console.log("product")
    console.log(product)
    const ProductExist = CartItems.find((item) => item.bookID === product.bookID);

    console.log("ProductExist")
    console.log(ProductExist)

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
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books CartItems={CartItems} handleAddProducts={handleAddProducts} handleRemoveProducts={handleRemoveProducts} />} />
          <Route path="/checkout" exact
            element={
              <CartContext.Provider value={{ product, setProduct }}>
                <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>

                <Checkout CartItems={CartItems} handleAddProducts={handleAddProducts} handleRemoveProducts={handleRemoveProducts}
                  />
                </UserInfoContext.Provider>

              </CartContext.Provider>

          }


          />
          <Route path="/login" element={
            <UserContext.Provider value={{ user, setUser }}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo}}>
                <OrderInfoContext.Provider value={{ orderInfo, setOrderInfo }}>
                  <CartContext.Provider value={{ profileIDCart, setProfileIDCart }}>
                    <Login />
                  </CartContext.Provider>
                </OrderInfoContext.Provider>
              </UserInfoContext.Provider>
            </UserContext.Provider>
          }/>

          <Route path="/cart" element={
            <CartContext.Provider value={{ profileIDCart, setProfileIDCart }}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <Cart CartItems={CartItems} handleAddProducts={handleAddProducts} handleRemoveProducts={handleRemoveProducts} />
              </UserInfoContext.Provider>

            </CartContext.Provider>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search"
            element={
              <CartContext.Provider value={{product, setProduct}}>
                <Search CartItems={CartItems} handleAddProducts={handleAddProducts} handleRemoveProducts={handleRemoveProducts} />
                </CartContext.Provider>

              } />

          <Route path="/profile" element={
            <UserContext.Provider value={{ user, setUser}}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <OrderInfoContext.Provider value={{ orderInfo, setOrderInfo }}>
                  <Profile />       
                </OrderInfoContext.Provider>
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
