import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Router>
        <List/>
      </Router>
    </div>
  );
}

export default App;
