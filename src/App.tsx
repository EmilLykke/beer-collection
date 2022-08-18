import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/components/navbar-container";
import Home from "./pages/home/components/home-container";
import Beers from "./pages/beers/components/beer-container/beer-list";
import BeerDetails from "./pages/beers/components/beer-details";
import JSONResult from "./common/beers/beers.json";
import AddBeer from "./pages/beers/components/beer-add";

let contextJSON = JSON.parse(JSON.stringify(JSONResult));
export const BeersContext: React.Context<any> = React.createContext({
  session: contextJSON,
  setSession: () => {},
});

function App() {
  const [session, setSession] = useState(contextJSON);
  const value = { session, setSession };

  return (
    <Router>
      <Navbar />
      <BeersContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beer/:id" element={<BeerDetails />} />
          <Route path="/addbeer" element={<AddBeer data={value.session} />} />
        </Routes>
      </BeersContext.Provider>
    </Router>
  );
}
export default App;

export const SessionSwitcher = (props: any) => {
  const { session, setSession } = useContext(BeersContext);
  let obj = props.data;
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        setSession([...session, obj]);
      }}
    >
      Submit
    </button>
  );
};
