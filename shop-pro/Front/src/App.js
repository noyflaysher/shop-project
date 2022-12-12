import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import ChosenProduct from "./components/ChosenProduct";
import Checkout from "./components/Checkout";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);

  const getProducts = () => {
    fetch("http://localhost:5000/shop/getProductsList")
      .then((response) => (response.ok ? response.json() : { products: [] }))
      .then((data) => {
        setProductsList(data.products);
        console.log(data);
        console.log(data.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <List items={productsList} />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Checkout />
              </div>
            }
          />
          <Route
            path="/:index"
            element={
              <div>
                <ChosenProduct items={productsList} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
