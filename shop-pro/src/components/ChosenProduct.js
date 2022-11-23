import React from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from 'react-icons/bi';



import "./ChosenProduct.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ChosenProduct(props) {
  const index = useParams().index;
  const product = props.items.find((p) => p.id == index);

  return (
    <>
      <div className="chosenProduct__container">
      <Link to="/" >
        <BiArrowBack className="chosenProduct__back" />
        </Link>
        
        <div className="chosenProduct__title">{product.title}</div>
        <div className="chosenProduct__images">
          <Carousel
            className="carousel"
            centerMode
            infiniteLoop
            useKeyboardArrows
          >
            {product.image.map((image) => (
              <img src={image} className="chosenProduct__img" />
            ))}
          </Carousel>
        </div>
        <div className="chosenProduct__details">
          <div className="chosenProduct__price">{product.price}$</div>
          <div className="chosenProduct__description">
            {product.description}
          </div>
          <div className="chosenProduct__store">
            <h3>Where can you find?</h3>
            <ul>
              {product.store.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/" className="button__back">
        <BiArrowBack className="button__back-icon" />back to shopping cart
        </Link>
      </div>
    </>
  );
}

export default ChosenProduct;
