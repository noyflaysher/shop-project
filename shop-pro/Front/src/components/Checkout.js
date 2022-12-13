import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Checkout_Product from "./Checkout_Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__main">
        <div className="checkout__products">
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <Checkout_Product
              title={item.title}
              images={item.images[0]}
              amount={item.amount}
              price={item.price}
              description={item.description}
              stores={item.stores}
              id={item.id}
            />
          ))}
        </div>

        <div className="checkout__subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
