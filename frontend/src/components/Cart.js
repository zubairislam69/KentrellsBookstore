import React, {useContext, useState} from 'react'
import { CartContext } from './CartContext';

const Cart = ({ CartItems, handleAddProducts, handleRemoveProducts }) => {
  
  const { product, setProduct } = useContext(CartContext)

  
  console.log("CartItems IN CART")

  console.log(CartItems)
  const totalPrice = CartItems.reduce((price, item) =>
    price + item.quantity * item.price,0
  )

  

  // const totalPrice = product.reduce((accumulator, object) => {
  //   return accumulator + object.price;
  // }, 0);
  

  // const [price, setPrice] = useState(0)

  // console.log("price")
  // console.log(price)
  // // const totalPrice = 0
  
  // const [num, setNum] = useState(0)
  // const [quantity, setQuantity] = useState(1)

  // const add = (item) => {
  //   setNum((prevState) => prevState + item)
  //   setQuantity((prevState) => prevState + 1)
  // }

  // const remove = (item) => {
  //   if (num != 0) {
  //     setNum((prevState) => prevState - item)
  //     setQuantity((prevState) => prevState - 1)
  //   }

  //   if (num < 0) {
  //     setNum(0)
  //     setQuantity(0)
  //   }
  // }


  // console.log("num")

  // console.log(num)
  
  return (
    <div className='cart-items'>
      


      {/* {product.map((item) => 
        // setPrice((prevState) => prevState += item.price)

        (
          <>
            <div>
            {item.title} {item.price} id: {item.id} Quantity: {quantity}
            </div>
          <button onClick={() => add(item.price)}> + </button>
          <button onClick={() => remove(item.price)}> - </button>
          </>
        )
      )}
      
      Total Price: {parseFloat(num).toFixed(2)} */}







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
            src="images/img-9.jpg" 
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
  )
};

export default Cart;
