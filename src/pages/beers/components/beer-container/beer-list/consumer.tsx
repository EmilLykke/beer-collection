import React from "react";

import { BeersContext } from "../../../../../App";
import BeerWrapper from "./beer-wrapper";

export default function ContextConsumer() {
  return (
    <BeersContext.Consumer>
      {(context) => <BeerWrapper data={context} />}
    </BeersContext.Consumer>
  );
}
