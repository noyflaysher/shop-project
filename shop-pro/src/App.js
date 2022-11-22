import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import ChosenProduct from "./components/ChosenProduct";

function App() {
  const Products = [
    {
      id: "p1",
      title: "Makeup",
      price: 69.99,
      image: [
        "https://sdcdn.io/mac/il/mac_sku_M6JC17_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_M6JC17_1x1_0.png?width=1080&height=1080",
      ],
      store: ["Holon mall", "Ramat Aviv"],
      description:
        "Light make-up, with a natural matte finish with an advanced formula, neutralizing unnecessary shine. Suitable for medium to full coverage with durability up to 24 hours. Has a wide shade range, with over 60 comprehensive shades for all skin tones. Pump sold separately.",
    },
    {
      id: "p2",
      title: "High Lighter",
      price: 59.99,
      image: [
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_0.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_3.png?width=1080&height=1080",
      ],
      store: ["Gindi mall", "TLV Mall"],
      description:
        "Shimmer highlighter in the form of baked powder Yoni Itai, with a luxurious texture. To give a metallic and powerful glow.",
    },
    {
      id: "p3",
      title: "BRONZING POWDER",
      price: 65.99,
      image: [
        "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_0.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_3.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_5.png?width=1080&height=1080",
      ],
      store: ["Hazahav Mall", "Ramat Aviv"],
      description:
        "A powder bronzer that gives the skin a radiant and natural tan",
    },
  ];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <List items={Products} />
              </div>
            }
          />
          <Route
            path="/:index"
            element={
              <div>
                <ChosenProduct items={Products} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
