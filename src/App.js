import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import Proj from "./Proj";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/proj" element={<Proj />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
