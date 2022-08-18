import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Denne BeerModel har jeg selv lavet ud fra api'ens response
import { BeerModel } from "../../models";
import "./beer-details.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { BeersContext } from "../../../../App";

export default function BeerDetails() {
  const params = useParams();
  let context = React.useContext(BeersContext);

  let beer: BeerModel = context.session.find(
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

  const [open, setOpen] = useState(false);
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
