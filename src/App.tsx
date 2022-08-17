import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/components/navbar-container";
import Home from "./pages/home/components/home-container";
import Beers from "./pages/beers/components/beer-container/beer-list";
import BeerDetails from "./pages/beers/components/beer-details";
import JSONResult from "./common/beers/beers.json";
import AddBeer from "./pages/beers/components/beer-add/beer-add";

export const BeersContext: React.Context<any> = React.createContext(
  JSON.parse(JSON.stringify(JSONResult))
);

function App() {
  let contextJSONString = JSON.parse(JSON.stringify(JSONResult));

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(sessionList);
  // }, []);

  return (
    <Router>
      <Navbar />
      <BeersContext.Provider value={contextJSONString}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beer/:id" element={<BeerDetails />} />
          <Route path="/addbeer" element={<AddBeer />} />
        </Routes>
      </BeersContext.Provider>
    </Router>
  );
}
export default App;
