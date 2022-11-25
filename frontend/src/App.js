//import './App.css';
import React, {useState } from 'react'
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

function App() {
  const [user, setUser] = useState("")
  const [userInfo, setUserInfo] = useState("Hello")

<<<<<<< HEAD
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
    
=======
>>>>>>> b21083f1da5d427535ca9b5280051c98c30d4d46
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}> 
        <Navbar />
      </UserContext.Provider>
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
