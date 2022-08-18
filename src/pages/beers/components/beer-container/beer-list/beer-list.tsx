import React, { useEffect, useState } from "react";
import { BeersContext } from "../../../../../App";
import Beer from "../beer-display";

export default function BeerList() {
  let { session, setSession } = React.useContext(BeersContext);
  const [sessionSorted, setSessionSorted] = useState([]);
  const [sort, setSort] = useState("session");

  const phAscending = [...session].sort((a, b) => a.ph - b.ph);

  const phDescending = [...session].sort((a, b) => b.ph - a.ph);

  const nameAscending = [...session].sort((a, b) => (a.name > b.name ? 1 : -1));

  const nameDescending = [...session].sort((a, b) =>
    a.name > b.name ? -1 : 1
  );

  const yeastAscending = [...session].sort((a, b) =>
    a.ingredients.yeast > b.ingredients.yeast ? 1 : -1
  );

  const yeastDescending = [...session].sort((a, b) =>
    a.ingredients.yeast > b.ingredients.yeast ? -1 : 1
  );

  const first_brewedAscending = [...session].sort(
    (a, b) =>
      parseFloat(
        a.first_brewed.split("/")[1] + "." + a.first_brewed.split("/")[0]
      ) -
      parseFloat(
        b.first_brewed.split("/")[1] + "." + b.first_brewed.split("/")[0]
      )
  );

  const first_brewedDescending = [...session].sort(
    (a, b) =>
      parseFloat(
        b.first_brewed.split("/")[1] + "." + b.first_brewed.split("/")[0]
      ) -
      parseFloat(
        a.first_brewed.split("/")[1] + "." + a.first_brewed.split("/")[0]
      )
  );

  useEffect(() => {
    setSessionSorted(JSON.parse(JSON.stringify(eval(sort))));
  }, [sort]);

  return (
    <>
      <div className="beer-list-sort-buttons">
        <select
          id="select_sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="session">Default</option>
          <option value="nameAscending">Name A-Z</option>
          <option value="nameDescending">Name Z-A</option>
          <option value="phAscending">ph &#129045;</option>
          <option value="phDescending">ph &#129047;</option>
          <option value="yeastAscending">Yeast A-Z</option>
          <option value="yeastDescending">Yeast Z-A</option>
          <option value="first_brewedAscending">First Brewed &#129045;</option>
          <option value="first_brewedDescending">First Brewed &#129047;</option>
        </select>
      </div>
      <div className="beer-list">
        {sessionSorted.map((beer: any) => (
          <Beer data={beer} />
        ))}
      </div>
    </>
  );
}

function sortByName(a: any, b: any) {
  var uppercase_a = a.name.toUpperCase();
  var uppercase_b = b.name.toUpperCase();
  return uppercase_a > uppercase_b ? 1 : -1;
}
