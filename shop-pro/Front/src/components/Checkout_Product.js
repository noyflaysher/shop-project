import React from 'react';
import "./Checkout_Product.css";


function Checkout_Product({title,image,price}) {
  return (
    <div className="checkoutProduct">
        
        <img src={image} alt="checkout img" className="checkoutProduct__img" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            
            <div className="checkoutProduct__amountDetils">
                <button className='checkoutProduct__btn checkoutProduct__btn-plus'>−</button>
                <p className='checkoutProduct__amount'>1 </p>
                <button className='checkoutProduct__btn'>+</button>
            </div>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {/* <button title="Remove from basket">remove</button> */}
        </div>
    </div>
  )
}

export default Checkout_Product