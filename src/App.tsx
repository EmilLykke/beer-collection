import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./pages/navbar/components/navbar-container";
import Home from "./pages/home/components/home-container";
import Beers from "./pages/beers/components/beer-container/beer-list";
import BeerDetails from "./pages/beers/components/beer-details";
import JSONResult from "./common/beers/beers.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(JSON.stringify(JSONResult)));
  }, []);
  localStorage.setItem("session", JSON.stringify(JSONResult));
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers data={data} />} />
        <Route path="/beer/:id" element={<BeerDetails data={data} />} />
      </Routes>
    </Router>
  );
}
export default App;
