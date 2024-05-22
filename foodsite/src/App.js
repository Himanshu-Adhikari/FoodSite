import "./App.css";
import Home from "./Visuals/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Visuals/Login";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
