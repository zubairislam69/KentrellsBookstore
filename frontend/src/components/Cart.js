import React, {useContext, useState, useEffect} from 'react'
import { CartContext } from './CartContext';
import { UserInfoContext } from './pages/UserInfoContext';
import { useNavigate } from "react-router-dom";

import Axios from 'axios'

const Cart = ({ CartItems, handleAddProducts, handleRemoveProducts }) => {
  const { profileIDCart, setProfileIDCart } = useContext(CartContext)
  const { userInfo, setUserInfo } = useContext(UserInfoContext)
  const [profileID, setProfileID] = useState()
  
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setProfileID(foundUser[0].profileID)
    }

  }, []);



  console.log("profID")
  // console.log(userInfo.profileID)

  console.log("CartItems IN CART")

  console.log(CartItems)

 
  console.log("book IDS")
  
  const ordersBookID = CartItems.map((item) => {
    return item.bookID
  })

  console.log(ordersBookID)

  const totalPrice = CartItems.reduce((price, item) =>
    price + item.quantity * item.price, 0
  )

  console.log(parseFloat(totalPrice).toFixed(2))

  const handleSubmit = async () => {
    const orderInfo = { profileID: profileID, price: parseFloat(totalPrice).toFixed(2), ordersBookID: ordersBookID };

    const response = await Axios.post(
      "http://localhost:5000/checkout",
      orderInfo
    );

    
      navigate("/")
  }
  
  

  
  return (
    <>
    <div className='cart-items'>
      <div className="div cart-items-total-price-name">
        Total Price
        <div className="div cart-items-total-price">
          ${parseFloat(totalPrice).toFixed(2)}
        </div>
      </div>

        {CartItems.length === 0 && (
        <div className='cart-items-empty'>
            No Items Are Added
        </div>
  )}
    <div>
          {CartItems.map((item) => (
            (<div key={item.bookID} 
            className="cart-items-list">
            <img className = 'cart-items-image'
            src={item.src}
            alt={item.text}
             />
            <div className='cart-items-name'>{item.title}</div>
            <div className='cart-items-function'>
              <button className='cart-items-add' onClick={() => handleAddProducts(item)}>+</button>
              <button className='cart-items-remove' onClick={() => handleRemoveProducts(item)}>-</button>
              </div>
              <div className="cart-items-price">
                {item.quantity}* ${item.price}
              </div>
            </div>
          )))}

    </div> 
    
      </div>
      
      <br/>
      <button onClick = {handleSubmit}> Checkout </button>
    </>

      )
    
}

export default Cart;
