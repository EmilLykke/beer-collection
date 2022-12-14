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
  let { session, setSession } = React.useContext(BeersContext);

  let beer: BeerModel = session.find(
    (item: BeerModel) => item.id.toString() == params.id
  );
  const [data, setData] = useState<BeerModel>(beer);
  const [rating, setRating] = useState(beer.rating ?? 0);
  useEffect(() => {
    setData(beer);
  }, []);

  useEffect(() => {
    setData({ ...beer, rating: rating });
    setSession(newArr);
  }, [rating]);

  // hvordan man opdataere arrayen med øl er fundet her:
  // https://stackoverflow.com/questions/66667325/how-to-update-value-of-json-object-in-reactjs
  const newArr = session.map((obj: any) => {
    if (obj.id == params.id) {
      return {
        ...obj,
        rating: rating,
      };
    }

    return { ...obj };
  });

  let url = data.image_url;
  const beer_image_style = {
    background: "url(" + url + ")",
  };

  const [open, setOpen] = useState(false);
  return (
    <section className="beer-detail-section">
      <div className="beer-detail-container">
        <div className="beer-detail-image-div">
          <div className="beer-detail-image" style={beer_image_style}></div>
        </div>

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
            <div>
              <h2 className="fact-header">Rating:</h2>
              <p>{data.rating ?? ""}</p>
            </div>
            <div>
              <h2 className="fact-header">Change Rating:</h2>
              <input
                type="number"
                value={rating}
                name="rating"
                onChange={(e) => {
                  setRating(parseFloat(e.target.value));
                }}
              />
            </div>
            <br />

            <div className="beer-detail-description-brew-tips-toggle">
              <h2 className="fact-header">Brewers tips:</h2>
              {/* Denne del med collapse er taget fra dette link https://react-bootstrap.github.io/utilities/transitions/ */}
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="brew-tips"
                aria-expanded={open}
              >
                &#9660;
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
