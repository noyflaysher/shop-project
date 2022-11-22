import React from 'react'
import { useParams } from 'react-router-dom'
import "./ChosenProduct.css"

function ChosenProduct(props) {
    const index=useParams().index;
    {console.log(index);}
    const product=props.items.find(p=> p.id==index);
  return (
    <>
    <div className='chosenProduct__container'>
    <div className='chosenProduct__title'>{product.title}</div>
    <div className="chosenProduct__images">
      <img src={product.image} className="chosenProduct__img1"/>
      <img src={product.image} className="chosenProduct__img2"/>
    </div>
   
    <div className='chosenProduct__price'>{product.price}</div>
    </div>
  </>)
}

export default ChosenProduct