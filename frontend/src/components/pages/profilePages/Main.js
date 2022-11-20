import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='main-container'>
        <div className='main-latest-order'>
            <h1>Latest Order:</h1>
            <h4>Book Name: </h4>
            <h4>Author: </h4>
            <h4>Price: </h4>
            <h4>(INSERT CARD FOR BOOK THAT WAS BOUGHT)</h4>
        </div>

        <div className='wishlist'>
            <h1>Wish List:</h1>
            <h4>Book Name: </h4>
            <h4>Author: </h4>
            <h4>Price: </h4>
            <h4>(INSERT CARD FOR BOOK THAT WAS BOUGHT)</h4>
        </div>

        <div className='authors'>
            <h1>Followed Authors:</h1>
            <h4>Name: </h4>
            <h4>Books by Author: </h4>
        </div>
    </div>
  )
}

export default Main