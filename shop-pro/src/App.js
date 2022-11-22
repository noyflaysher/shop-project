import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import List from "./components/List";
import ChosenProduct from './components/ChosenProduct';

function App() {
  const Products = [
    {
      id:"p1" ,
      title: "MakeUp",
      price: 168.99,
      image: "https://www.vectorstock.com/royalty-free-vector/makeup-cosmetics-tonal-cream-bottle-icon-vector-15674496",
    },
    { id: "p2", title: "Shimmer", price: 119.99, image:"https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080" },
    {
      id: "p3",
      title: "Bronser",
      price: 159.99,
      image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583722236-guerlain-bronzer-1583722226.jpg?crop=1xw:1xh;center,top&resize=480:*"
    },
  ];
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={
          <div>
            <List items={Products}/>
            </div>}
          />

          <Route path="/:index" element={
            <div>
              <ChosenProduct items={Products}/>
              </div>}
          />
  
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
