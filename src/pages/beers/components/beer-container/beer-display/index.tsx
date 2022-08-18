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
          <div>
            <div>
              <b>Name:</b> {props.data.name}
            </div>
            <div>
              <b>Yeast:</b> {props.data.ingredients.yeast}
            </div>
          </div>
          <div>
            <div>
              <b>ph:</b> {props.data.ph}
            </div>
            <div>
              <b>First brewed:</b> {props.data.first_brewed}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
