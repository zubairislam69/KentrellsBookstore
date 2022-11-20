import React from 'react'
import "./Orders.css"

const Orders = () => {
  return (
    <div className='container'>
        <div className='latest-order'>
            <h1>Latest Orders:</h1>
            <h4>Book Name: </h4>
            <h4>Author: </h4>
            <h4>Price: </h4>
            <h4>(INSERT CARD FOR BOOK THAT WAS BOUGHT)</h4>
        </div>

        <div className='all-orders'>
            <h1>All Orders:</h1>
            <h4>Book Name: </h4>
            <h4>Author: </h4>
            <h4>Price: </h4>
            <h4>(INSERT CARD FOR BOOK THAT WAS BOUGHT)</h4>
        </div>
    </div>
  )
}

export default Orders