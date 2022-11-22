import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";


import "./ChosenProduct.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ChosenProduct(props) {
    const index=useParams().index;
    {console.log(index);}
    const product=props.items.find(p=> p.id==index);
  return (
    <>
    <div className='chosenProduct__container'>
    <div className='chosenProduct__title'>{product.title}</div>
    <div className="chosenProduct__images">
      <Carousel className='carousel'>
       { product.image.map(image=> <img src={image} className="chosenProduct__img"/> )}
      </Carousel>
    </div>
   <div className='chosenProduct__details'>
    <div className='chosenProduct__price'>{product.price}</div> 
    <div className='chosenProduct__store'>{product.store.map(s=> `${s}, `)}</div>
    <div className='chosenProduct__description'>{product.description}</div>
    </div>
    </div>
    
  </>)
}

export default ChosenProduct