import { time } from "console";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SessionSwitcher } from "../../../../App";
import "./beer-add.css";

export default class AddBeer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      id: Object.keys(props.data).length + 1,
      name: "",
      tagline: "",
      first_brewed: "",
      description: "",
      image_url: "",
      ph: 0,
      ingredients: {
        yeast: "",
      },
      brewers_tips: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    if (event.target.id == "ph") {
      this.setState({
        ...this.state,
        [event.target.id]: parseFloat(event.target.value),
      });
    } else if (event.target.id == "yeast") {
      this.setState({
        ...this.state,
        ingredients: {
          [event.target.id]: event.target.value,
        },
      });
    } else {
      this.setState({ ...this.state, [event.target.id]: event.target.value });
    }
  }

  handleSubmit(event: any) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="add-beer-section">
        <div className="add-beer-form-div">
          <form className="add-beer-form" onSubmit={this.handleSubmit}>
            <div className="beer-form-3">
              <div>
                <label>Name:</label>
                <br />
                <input
                  id="name"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>

              <div>
                <label>Tagline:</label>
                <br />
                <input
                  id="tagline"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.tagline}
                />
              </div>

              <div>
                <label>First brewed:</label>
                <br />
                <input
                  id="first_brewed"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.first_brewed}
                />
              </div>
            </div>
            <div className="beer-form-3">
              <div>
                <label>Image url:</label>
                <br />
                <input
                  id="image_url"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.image_url}
                />
              </div>

              <div>
                <label>ph:</label>
                <br />
                <input
                  id="ph"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.ph}
                />
              </div>

              <div>
                <label>Yeast:</label>
                <br />
                <input
                  id="yeast"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.ingredients.yeast}
                />
              </div>
            </div>
            <div className="beer-form-description">
              <label>Description:</label>
              <br />
              <textarea
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>

            <div className="beer-form-description">
              <label>Brewers tips:</label>
              <textarea
                id="brewers_tips"
                onChange={this.handleChange}
                value={this.state.brewers_tips}
              />
            </div>

            <Link to={"/beers"}>
              <SessionSwitcher data={this.state} submit={this.handleSubmit} />
            </Link>
          </form>
        </div>
      </section>
    );
  }
}
