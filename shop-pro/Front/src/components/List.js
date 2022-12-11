import React from "react";
import "./List.css";
import Product from "./Product";

function List(props) {
  return (
    <div className="List">
      <h1>MakeUp Shopping Store</h1>
      {props.items.map((product) => {
        return (
          <>
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images}
              stores={product.stores}
              description={product.description}
            />
          </>
        );
      })}
    </div>
  );
}

export default List;
