import React from "react";
import { Link } from "react-router-dom";
import "./beer-list.css";
import BeerList from "./beer-list";

export default class Beers extends React.Component {
  render() {
    return (
      <>
        <div className="beer-list-header">
          <h1>Welcome your beer collection</h1>
        </div>

        <div className="beer-list-add-button">
          <p>Add a beer: </p>
          <Link className="btn btn-secondary" to={"/addbeer"}>
            +
          </Link>
        </div>

        <BeerList />
      </>
    );
  }
}
