import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import ChosenProduct from "./components/ChosenProduct";
import Checkout from "./components/Checkout";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";

function App() {
  const [productsList,setProductsList]=useState([]);
  // const Products = [
  //   {
  //     id: "p1",
  //     title: "Makeup",
  //     price: 69.99,
  //     image: [
  //       "https://sdcdn.io/mac/il/mac_sku_M6JC17_1x1_1.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M6JC17_1x1_0.png?width=1080&height=1080",
  //     ],
  //     store: ["Holon mall", "Ramat Aviv"],
  //     description:
  //       "Light make-up, with a natural matte finish with an advanced formula, neutralizing unnecessary shine. Suitable for medium to full coverage with durability up to 24 hours. Has a wide shade range, with over 60 comprehensive shades for all skin tones. Pump sold separately.",
  //   },
  //   {
  //     id: "p2",
  //     title: "High Lighter",
  //     price: 59.99,
  //     image: [
  //       "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_0.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_3.png?width=1080&height=1080",
  //     ],
  //     store: ["Gindi mall", "TLV Mall"],
  //     description:
  //       "Shimmer highlighter in the form of baked powder Yoni Itai, with a luxurious texture. To give a metallic and powerful glow.",
  //   },
  //   {
  //     id: "p3",
  //     title: "Bronzing Powder",
  //     price: 65.99,
  //     image: [
  //       "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_1.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_0.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_3.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_5.png?width=1080&height=1080",
  //     ],
  //     store: ["Hazahav Mall", "Ramat Aviv"],
  //     description:
  //       "A powder bronzer that gives the skin a radiant and natural tan",
  //   },
  //   {
  //     id: "p4",
  //     title: "Mascara",
  //     price: 29.99,
  //     image: [
  //       "https://sdcdn.io/mac/us/mac_sku_SN4P01_1x1_0.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/us/mac_sku_SN4P01_1x1_2.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/us/mac_sku_SN4P01_1x1_1.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_SLEH01_1x1_5.png?width=1080&height=1080",
  //     ],
  //     store: ["Rehovot mall", "Ramat Aviv", "Mamilla Mall"],
  //     description:
  //       "An endlessly buildable, clump-resistant mascara that stacks on infinite layers of volume and length",
  //   },
  //   {
  //     id: "p5",
  //     title: "MATTE LIPSTICK",
  //     price: 39.99,
  //     image: [
  //       "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_1.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_0.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_3.png?width=1080&height=1080",
  //       "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_6.png?width=1080&height=1080",
  //     ],
  //     store: ["Hazahav mall", "Ramat Aviv", "Holon Mall"],
  //     description:
  //     "Shimmer highlighter in the form of baked powder Yoni Itai, with a luxurious texture. To give a metallic and powerful glow.",
  //   },
  // ];

  const getProducts=()=>{
    fetch("http://localhost:5000/shop/getProductsList").then((response)=>(
      response.ok ? response.json() : { products: [] })).then((data) => {
        setProductsList(data.products);
        console.log(data);
        console.log(data.products);
      });
  
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <>
                  <Navigation/>
                  <List items={productsList} />
                </>

              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Checkout/>
              </div>
            }
          />
          <Route
            path="/:index"
            element={
              <div>
                <Navigation/>
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
