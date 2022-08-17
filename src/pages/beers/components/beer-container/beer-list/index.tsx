import React from "react";
import AddBeer from "../../beer-add/beer-add";
import Beer from "../beer-display";
import "./beer-list.css";

export default class Beers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { data: props };
  }

  render() {
    return (
      <>
        <h1>Welcome to the beer page</h1>
        <AddBeer />
        <div className="beer-list">
          {this.props.data.map((beer: any) => (
            <Beer data={beer} />
          ))}
        </div>
      </>
    );
  }
}
