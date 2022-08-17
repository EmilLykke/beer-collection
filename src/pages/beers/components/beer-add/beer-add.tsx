import { time } from "console";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeerModel2 } from "../../models";

export default class AddBeer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    let sessionList = JSON.parse(localStorage.getItem("session") as string);
    this.state = {
      id: Object.keys(sessionList).length + 1,
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
    if (event.target.id == "yeast") {
      this.setState({
        ...this.state,
        ingredients: { [event.target.id]: event.target.value },
      });
    } else {
      this.setState({ ...this.state, [event.target.id]: event.target.value });
    }
  }

  handleSubmit(event: any) {
    let sessionList = JSON.parse(localStorage.getItem("session") as string);
    sessionList.push(JSON.parse(JSON.stringify(this.state)));
    localStorage.setItem("session", sessionList);

    console.log(sessionList);
    event.preventDefault();
    // window.location.href = "/beers";
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              id="tagline"
              type="text"
              onChange={this.handleChange}
              value={this.state.tagline}
            />
            <input
              id="first_brewed"
              type="text"
              onChange={this.handleChange}
              value={this.state.first_brewed}
            />
            <input
              id="description"
              type="text"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <input
              id="image_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.image_url}
            />
            <input
              id="ph"
              type="number"
              onChange={this.handleChange}
              value={this.state.ph}
            />
            <input
              id="yeast"
              type="text"
              onChange={this.handleChange}
              value={this.state.ingredients.yeast}
            />
            <input
              id="brewers_tips"
              type="text"
              onChange={this.handleChange}
              value={this.state.brewers_tips}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
