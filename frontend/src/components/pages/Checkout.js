import React from 'react'
import { useState } from 'react'
import Cart from '../Cart'

const Checkout=({CartItems, handleAddProducts, handleRemoveProducts}) => {

  
  return (
    <>
    <Cart CartItems={CartItems} 
    handleAddProducts= {handleAddProducts}
    handleRemoveProducts = {handleRemoveProducts} />
    
    </>
    
  )
}

export default Checkout;
