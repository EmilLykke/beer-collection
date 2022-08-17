import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class Navbar extends Component {
    render() { 
        return ( 
            // Dette er en navbar template taget direkte fra bootstraps hjemmeside
            // Jeg har bare lavet links om så de passer på react-router-dom
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link className="navbar-brand " to="/" >
                                Home
                            </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " to="/" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/beers">
                                Beers 
                            </Link>
                        </li>   
                        </ul>
                        </div>
                    </div>
                </nav>
         );
    }
}