import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";

import "./ChosenProduct.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ChosenProduct(props) {
  const [product, setProduct] = useState("");
  const index = useParams().index;
  const productFromList = props.items.find((p) => p.id == index);
  const [state, dispatch] = useStateValue();

  const getProduct = () => {
    fetch(`http://localhost:5000/shop/getProduct/${index}`)
      .then((response) => (response.ok ? response.json() : { products: "" }))
      .then((data) => {
        setProduct(data.product);
      });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product._id,
        title: product.title,
        amount: 1,
        price: product.price,
        description: product.description,
        images: product.images,
        stores: product.stores,
      },
      title: product.title,
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="chosenProduct__container">
        <Link to="/">
          <BiArrowBack className="chosenProduct__back" />
        </Link>

        <div className="chosenProduct__title">
          {product.title || productFromList.title}
        </div>
        <div className="chosenProduct__images">
          <Carousel
            className="carousel"
            centerMode
            infiniteLoop
            useKeyboardArrows
          >
            {product.images?.map((image) => (
              <img src={image} className="chosenProduct__img" />
            )) ||
              productFromList.images?.map((image) => (
                <img src={image} className="chosenProduct__img" />
              ))}
          </Carousel>
        </div>
        <div className="chosenProduct__details">
          <div className="chosenProduct__price">
            {product.price || productFromList.price}$
          </div>
          <div className="chosenProduct__description">
            {product.description || productFromList.description}
          </div>
          <div className="chosenProduct__store">
            <h3>Where can you find?</h3>
            <ul>
              {product.stores?.map((s) => <li>{s}</li>) ||
                productFromList.stores?.map((s) => <li>{s}</li>)}
            </ul>
          </div>
        </div>

        <button onClick={addToBasket} className="chosenProduct__button">
          Add to cart
          <ShoppingCartIcon className="basken__icon" />
        </button>

        <Link to="/" className="chosenProduct__button">
          <BiArrowBack className="button__back-icon" />
          back to shopping cart
        </Link>
      </div>
    </>
  );
}

export default ChosenProduct;
