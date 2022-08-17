import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";

// Jeg er end med at impotere JSON filen på denne måde
// grunden til det er fordi jeg ikke kunne løse fejlen
// som opstod når jeg kom ind på en side med et id i urlen
// og jeg så refreshede. Når jeg refreshede fik jeg fejlen
// med at jeg ikke kunne læse en property på undefined objekt.
// Mit bud er at man skal bruge en eller anden form for context
// så man hele tiden kan tilgår JSONResult
// import JSONResult from "../../../../common/beers/beers.json";
//
// Jeg fandt en anden løsning hvor jeg brugte localStorage.
// Jeg er ikke sikker på at den er optimal men det er den jeg går
// med for nu

// Denne BeerModel har jeg selv lavet ud fra api'ens response
import { BeerModel } from "../../models";
import "./beer-details.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { BeersContext } from "../../../../App";

export default function BeerDetails() {
  const params = useParams();
  const [open, setOpen] = useState(false);
  let context = React.useContext(BeersContext);

  let beer: BeerModel = context.find(
    (item: BeerModel) => item.id.toString() == params.id
  );
  const [data, setData] = useState<BeerModel>(beer);
  useEffect(() => {
    setData(beer);
  }, []);

  let url = data.image_url;
  const beer_image_style = {
    background: "url(" + url + ")",
  };

  return (
    <section className="beer-detail-section">
      <div className="beer-detail-container">
        <div className="beer-detail-image" style={beer_image_style}></div>
        <div className="beer-detail-description-container">
          <div></div>
          <div className="beer-detail-description">
            <h1>{data.name}</h1>
            <h2 className="fact-header">{data.tagline}</h2>
            <div className="beer-detail-description-facts">
              <h2 className="fact-header">Facts:</h2>
              <ul>
                <li>
                  <span>First brewed:</span> {data.first_brewed}
                </li>
                <li>
                  <span>ph:</span> {data.ph}
                </li>
                <li>
                  <span>Yeast:</span> {data.ingredients.yeast}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="fact-header">Description:</h2>
              <p>{data.description}</p>
            </div>
            <div className="beer-detail-description-brew-tips-toggle">
              <h2 className="fact-header">Brewers tips:</h2>
              {/* Denne del med collapse er taget fra dette link https://react-bootstrap.github.io/utilities/transitions/ */}
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="brew-tips"
                aria-expanded={open}
              >
                V
              </Button>
            </div>
            <div className="beer-detail-description-brew-tips-collapse">
              <Collapse in={open}>
                <div
                  id="brew-tips"
                  className="beer-detail-description-brew-tips"
                >
                  {data.brewers_tips}
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
