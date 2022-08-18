import { Component } from "react";
import { Link } from "react-router-dom";
import "./home-container.css";

export default class Home extends Component {
  render() {
    return (
      <section className="home-section">
        <div className="home-header">
          <h1>Welcome to your beer collection</h1>
        </div>
        <div className="home-options">
          <div className="home-option-div">
            <h1>View your beer collection here:</h1>
            <div>
              <Link className="btn btn-warning" to={"/beers"}>
                Beer collection
              </Link>
            </div>
          </div>
          <div className="home-option-div">
            <h1>Add a beer to your collection:</h1>
            <div>
              <Link className="btn btn-warning" to={"/addbeer"}>
                Add Beer
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
