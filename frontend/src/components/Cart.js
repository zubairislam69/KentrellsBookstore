import React, {useContext, useState, useEffect} from 'react'
import { UserInfoContext } from './pages/UserInfoContext';
import { useNavigate, Link } from "react-router-dom";
import "./Cart.css"

import Axios from 'axios'



const Cart = ({ CartItems, handleAddProducts, handleRemoveProducts }) => {
  
  const [cardName, setCardName] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const [loginStatus, setLoginStatus] = useState("")

  const [profileID, setProfileID] = useState()
  
  const navigate = useNavigate()

  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setProfileID(foundUser[0].profileID)
      setLoginStatus("")
    } else {
      setLoginStatus("Please log in")
    }


  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if(cardNum.length==16 && cardName.length>0 && cardExp.length==6, cardCVV.length==3 && loggedInUser && CartItems.length>0){
      setButtonState(false);
    }


  }, [cardNum, cardName, cardCVV, cardExp]);


  const ordersBookID = CartItems.map((item) => {
    return item.bookID
  })


  const totalPrice = CartItems.reduce((price, item) =>
    price + item.quantity * item.price, 0
  )


  const handleSubmit = async (e) => {
    e.preventDefault()
    const orderInfo = {
      profileID: profileID, price: parseFloat(totalPrice).toFixed(2),
      ordersBookID: ordersBookID, cardNum: cardNum, cardName: cardName, cardCVV: cardCVV, cardExp: cardExp

    };

    const response = await Axios.post(
      "http://localhost:5000/checkout",
      orderInfo
    );


    
    navigate('/')
  }
  
  
  return (
    <>

    <p>{loginStatus}</p>


    {CartItems.length === 0 && (
        <div className='cart-items-empty'>
            No Items Are Added
        </div>
  )}
    <div className='cart-items'>

        

  
    <div className="cart">
          {CartItems.map((item) => (
            (<tr key={item.bookID} 
            className="cart-items-list">
              
            <td>
              <img className='cart-item-img'
              src={item.src}
              alt={item.text}
              />
            </td>
            <td className='cart-items-name'>{item.title}</td>
            <td className='cart-items-price'>quantity:{item.quantity}</td>
            <td className='cart-items-price'>price:{item.price}</td>
              <td className='cart-items-function'>
                <button className='cart-items-add' onClick={() => handleAddProducts(item)}>+</button>
                <button className='cart-items-remove' onClick={() => handleRemoveProducts(item)}>-</button>
              
              </td>
            </tr>
          )))}

    </div> 
    
      
      <br/>
        <div className="checkout">
          <form>
        <h2 className='checkout-header'>Payment Information</h2>
        
        <div className='card-information'>
        <input 
        onChange={(e) => setCardName(e.target.value)}

        id="name" 
        type="text" 
        placeholder='Name On Card'
        maxlength="40">
  
        </input>

        <input 
        id="cardnumber"
        onChange={(e) => setCardNum(e.target.value)}
        
        type="text" 
        minlength="16"
        maxlength="16"  
        placeholder='Card Number'
        inputmode="numeric">
  
        </input>

        <input 
        onChange={(e) => setCardExp(e.target.value)}
        id="expiredate" 
        type="text" 
        minlength="6"
        placeholder='Expiration MM/YYYY'
        maxlength="6"  
        inputmode="numeric">
  
        </input>
        <label for="CVV"></label>

        <input 
        onChange={(e) => setCardCVV(e.target.value)}
        id="CVV" 
        type="text" 
        minlength="3"
        placeholder='CVV'
        maxlength="3"  
        inputmode="numeric">
  
        </input>
        </div>
        
      <div className="information-seperator">      </div>

        <div className="div cart-items-total-price">
        Total Price: ${parseFloat(totalPrice).toFixed(2)}
        </div>
        <button disabled={buttonState} className="submit-btn" onClick={handleSubmit}> Checkout </button>
          </form>
      </div>
    </div>

    </>

      )
    
}

export default Cart;
