import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as BrandIcon } from "./beer.svg";

export default function Navbar() {
  const location = useLocation();
  const [homeLinkClasses, setHomeLinkClasses] = useState("nav-link");
  const [beersLinkClasses, setBeersLinkClasses] = useState("nav-link");

  useEffect(() => {
    if (location.pathname == "/") {
      setHomeLinkClasses("nav-link active");
      setBeersLinkClasses("nav-link");
    } else if (location.pathname == "/beers") {
      setBeersLinkClasses("nav-link active");
      setHomeLinkClasses("nav-link");
    } else {
      setHomeLinkClasses("nav-link");
      setBeersLinkClasses("nav-link");
    }
  }, [location]);

  return (
    // Dette er en navbar template taget direkte fra bootstraps hjemmeside
    // Jeg har bare lavet links om så de passer på react-router-dom
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-brand-div">
          <Link className="navbar-brand " to="/">
            {/* Denne svg har jeg lavet ved at tage et billede fra
              nettet og sat det ind i illustrator og har der konveteret
              det til en svg
            */}
            <BrandIcon />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={homeLinkClasses} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={beersLinkClasses} to="/beers">
                Beers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
