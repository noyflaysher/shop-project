import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navigation.css"
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {getBasketItemAmount} from "./reducer";


function Navigation() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='navigation'>
        <p>MakeUp Shop</p>
        <Link to="/checkout" className="toCart_btn">
        
        
        <button className='toCart_btn'>
            <span className="shoppin__icon">
                <ShoppingCartIcon />
            </span>
            <span>Your Cart</span>
            <span className="shopping__amount">{getBasketItemAmount(basket)}</span>
        </button>
        </Link>
    </div>
  )
}

export default Navigation