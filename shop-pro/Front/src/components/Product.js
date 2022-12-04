import React from 'react'
import { Link } from 'react-router-dom';
import "./Product.css";

function Product(props) {
  return (
    <Link to={`/${props.id}`}>
        {props.key}
        <div className='product'>
        <div className="product__details">
            <div className="product__title">{props.title}</div>
            <div className="product__price">price : {props.price} $</div>
        </div>
        <img src={props.image[1]} className="product__img"/>
    </div>
    </Link>

  )
}

export default Product