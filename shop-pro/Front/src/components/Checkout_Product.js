import React from 'react';
import "./Checkout_Product.css";
import { useStateValue } from "./StateProvider";
import DeleteIcon from '@mui/icons-material/Delete';


function Checkout_Product({title,image,price}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      title:title,
    })
  }
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
            <button className='checkoutProduct__remove' onClick={removeFromBasket} title="Remove from basket">remove <DeleteIcon fontSize="huge"/></button>
        </div>
        
    </div>
  )
}

export default Checkout_Product