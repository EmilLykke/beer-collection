import React from "react";
import fs from "fs";
import JSONResult from "../../../../common/beers/beers.json";

export default function AddBeer() {
  let list = JSON.parse(JSON.stringify(JSONResult));

  return (
    <div>
      <div></div>
    </div>
  );
}
