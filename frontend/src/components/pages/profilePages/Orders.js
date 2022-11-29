import React, {useState, useContext, useEffect} from 'react'
import "./Orders.css"
import { UserInfoContext } from '../UserInfoContext'
import Axios from "axios";
import { OrderInfoContext } from '../OrderInfoContext';

const Orders = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext)
  const { orderInfo, setOrderInfo } = useContext(OrderInfoContext)
  console.log("orderInfo")

  console.log(orderInfo)
  const [order, setOrder] = useState([{}])
  
    // <div className = 'all-orders' >
    //         <h1>All Orders:</h1>
    //         <h4>Book Name: </h4>
    //         <h4>Author: </h4>
    //         <h4>Price: </h4>
    //         <h4>(INSERT CARD FOR BOOK THAT WAS BOUGHT)</h4>
    //     </div >

  return (
    <div className='orders-container'>
        <div className='orders-latest-order'>
        <h1>Latest Orders: </h1>
        <h4>Book Name: {orderInfo[orderInfo.length-1].title}</h4>
            <h4>Author: </h4>
        <h4>Price: {orderInfo[orderInfo.length - 1].price}</h4>
        </div>

      <h1> All Orders </h1>
      {orderInfo.map((item) => (
        <div className='all-orders' >
          
          <h4>Book Name: {item.title}</h4>
          <h4>Author: </h4>
          <h4>Price: {item.price}</h4>
        </div >
      ))}
    </div>
  )
}

export default Orders