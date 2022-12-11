import React, { useRef } from 'react';
import "./Subtotal.css";

function Subtotal() {
  const nameRef=useRef("");
  const emailRef=useRef("");
  return (
    <div className='subtotal'>
        <p>
            Subtotal (0 items): <strong>$0</strong>
        </p>
        <label className='subtotal__name'>Name</label>
        <input className='subtotal__name-input' type="text" ref={nameRef} placeholder="enter your name"/>
        <label className="subtotal__email">Email</label>
        <input className="subtotal__email-input" type="text" ref={emailRef} placeholder="enter your email"/>
        <button className='checkout__button'>
            Checkout
        </button>
    </div>
  )
}

export default Subtotal