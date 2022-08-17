import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './pages/navbar/components/navbar-container';
import Home from "./pages/home/components/home-container";
import Beers from './pages/beers/components/beer-container/beer-list';

function App() {
  return (
    
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/beers" element={<Beers/>} />
            </Routes>
        </>
      </Router>
  );
}

export default App;
