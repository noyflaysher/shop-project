import React from 'react'
import "./List.css";
import Product from './Product';

function List(props) {

  return (
    <div className='List'>
        <h1>Shopping Card</h1>      
        {props.items.map((product)=>{
            return (
                <>
                <Product id={product.id} title={product.title} price={product.price} image={product.image} store={product.store} description={product.description}/>
           </> )
           
        })}
    </div>
  )
}

export default List