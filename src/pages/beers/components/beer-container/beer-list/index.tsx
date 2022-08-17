import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./beer-list.css";
import ContextConsumer from "./consumer";

export default class Beers extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to the beer page</h1>
        <Link to={"/addbeer"}>Add a Beer</Link>
        <div className="beer-list">
          <ContextConsumer />
        </div>
      </>
    );
  }
}
