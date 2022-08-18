import React from "react";
import { BeersContext } from "../../../../../App";
import Beer from "../beer-display";

export default function BeerList() {
  let { session, setSession } = React.useContext(BeersContext);

  return (
    <>
      {session.map((beer: any) => (
        <Beer data={beer} />
      ))}
    </>
  );
}
