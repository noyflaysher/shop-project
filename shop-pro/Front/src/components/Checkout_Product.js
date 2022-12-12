import React from 'react';
import "./Checkout_Product.css";
import { useStateValue } from "./StateProvider";
import DeleteIcon from '@mui/icons-material/Delete';


function Checkout_Product({title,images,price,amount,id,description,stores}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      title:title,
    })
  }

  const plusOne=()=>{
    dispatch({
      type: "ADD_TO_BASKET",
          item: {
              id: id,
              title:title,
              amount:1,
              price:price,
              description:description,
              images:images,
              stores:stores,
          },
          title:title,

  });
}

  const minusOne=()=>{
    dispatch({
      type: "MINUS_ONE_FROM_BASKET",
          item: {
              id: id,
              title:title,
              amount:1,
              price:price,
              description:description,
              images:images,
              stores:stores,
          },
          title:title,

  });

  }
  return (
    <div className="checkoutProduct">
        
        <img src={images} alt="checkout img" className="checkoutProduct__img" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            
            <div className="checkoutProduct__amountDetils">
                <button onClick={minusOne} className='checkoutProduct__btn checkoutProduct__btn-plus'>−</button>
                <p className='checkoutProduct__amount'>{amount} </p>
                <button onClick={plusOne} className='checkoutProduct__btn'>+</button>
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

export default Checkout_Product;