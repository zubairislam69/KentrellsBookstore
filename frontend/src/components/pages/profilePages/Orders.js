import React, {useState, useContext, useEffect} from 'react'
import "./Orders.css"

const Orders = ({orders}) => {

  return (
    <div className='orders-container'>
        <div className='orders-latest-order'>
          <h1>Latest Orders: </h1>
          <h4>Book Name: {orders[orders.length-1].title}</h4>
          <h4>Author: {orders[orders.length - 1].author_name}</h4>
          <h4>Price: {orders[orders.length - 1].price}</h4>
        </div>

        <h1> All Orders </h1>
          {orders.map((item) => (
            <div className='all-orders' >      
              <h4>Book Name: {item.title}</h4>
              <h4>Author: {item.author_name}</h4>
              <h4>Price: {item.price}</h4>
            </div >
          ))}
    </div>
  )
}

export default Orders