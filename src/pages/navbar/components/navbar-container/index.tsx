import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import "bootstrap/dist/js/bootstrap";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          {/* Dette billede er ikke mit bare et jeg har fundet på nettet */}
          <img src="https://produits.bienmanger.com/34491-0w600h600_Corona_Extra_Mexican_Blonde_Beer.jpg" />
        </Link>
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
