import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import ChosenProduct from "./components/ChosenProduct";

function App() {
  const Products = [
    {
      id: "p1",
      title: "MakeUp",
      price: 168.99,
      image: [
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
      ],
      store:['holon mall, Ramat Aviv'],
      description: 'makeup',
    },
    {
      id: "p2",
      title: "Shimmer",
      price: 119.99,
      image: [
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
      ],
      store:['holon mall, Ramat Aviv'],
      description: 'makeup',
    },
    {
      id: "p3",
      title: "Bronser",
      price: 159.99,
      image:[ "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
      "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080"],
      store:['holon mall, Ramat Aviv'],
      description: 'makeup',
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
