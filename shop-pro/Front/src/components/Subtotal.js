import React from 'react';
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className='subtotal'>
        <p>
            Subtotal (0 items): <strong>$0</strong>
        </p>
        <button className='checkout__button'>
            Checkout
        </button>
    </div>
  )
}

export default Subtotal