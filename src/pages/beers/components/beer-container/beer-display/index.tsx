import React from "react";
import "./beer-display.css";
import { Link } from "react-router-dom";

export default function Beer(props: any) {
  var beer_image = props.data.image_url;
  const beer_image_style = {
    background: "url(" + beer_image + ")",
  };

  return (
    <div className="single-beer-container">
      <Link to={"/beer/" + props.data.id}>
        <div className="beer-image" style={beer_image_style}></div>
        <div className="beer-info">
          <div>Name: {props.data.name}</div>
          <div>First brewed: {props.data.first_brewed}</div>
        </div>
      </Link>
    </div>
  );
}
