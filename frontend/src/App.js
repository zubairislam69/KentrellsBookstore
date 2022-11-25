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


  const [CartItems, setCart] = useState([]);

  const handleAddProducts = (product) => {

    const ProductExist = CartItems.find((item) => item.id === product.id);

    if (ProductExist){
      setCart(CartItems.map ((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    } else{
      setCart([...CartItems, {...product, quantity: 1}])
    }

  }

  const handleRemoveProducts = (product) => {
    const ProductExist = CartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCart(CartItems.map((item) => item.id !== product.id));
    } else{
      setCart(CartItems.map ((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      );
    }
  }
    
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

        <Routes CartItems={CartItems}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Books handleAddProducts = {handleAddProducts}/>} />
          <Route path="/checkout" exact
          element  = {
            <Checkout CartItems={CartItems} handleAddProducts = {handleAddProducts} handleRemoveProducts= {handleRemoveProducts}  />
          }
            component = {
              <Cart />
            }

          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
