import React from 'react'

const Cart = ({CartItems, handleAddProducts, handleRemoveProducts}) => {
  console.log(CartItems)
  const totalPrice = CartItems.reduce((price, item) =>
    price + item.quantity * item.price,0
  );
  return (
    <div className='cart-items'>
        <div className='cart-items-header'>Cart Items</div>

        {CartItems.length === 0 && (
        <div className='cart-items-empty'>
            No Items Are Added
        </div>
  )}
    <div>
          {CartItems.map((item) => (
            (<React.Fragment key={item.bookID} 
            className="cart-items-list">
            <img className = 'cart-items-image'
            src="images/img-9.jpg" 
            alt={item.text}
             />
            <div className='cart-items-name'>{item.text}</div>
            <div className='cart-items-function'>
              <button className='cart-items-add' onClick={() => handleAddProducts(item)}>+</button>
              <button className='cart-items-remove' onClick={() => handleRemoveProducts(item)}>-</button>
              </div>
              <div className="cart-items-price">
                {item.quantity}* ${item.price}
              </div>
            </React.Fragment>
          )))}

    </div>
    <div className="div cart-items-total-price-name">
      Total Price
      <div className="div cart-items-total-price">
        ${totalPrice}
      </div>
    </div>
  </div>
  )
};

export default Cart;
