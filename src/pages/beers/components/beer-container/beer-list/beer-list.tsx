import React, { useEffect, useState } from "react";
import { BeersContext } from "../../../../../App";
import Beer from "../beer-display";
import { ReactComponent as SortIcon } from "./sort.svg";
export default function BeerList() {
  let { session, setSession } = React.useContext(BeersContext);
  const [sessionSorted, setSessionSorted] = useState([]);
  const [sort, setSort] = useState("session");

  // Ideen tila t sotere på denne måde kommer her fra:
  // https://bobbyhadz.com/blog/react-sort-array-of-objects
  // Jeg har selv lavet dem om så de passer til mit behov
  const phAscending = [...session].sort((a, b) => a.ph - b.ph);

  const phDescending = [...session].sort((a, b) => b.ph - a.ph);

  const ratingAscending = [...session].sort((a, b) => a.rating - b.rating);

  const ratingDescending = [...session].sort((a, b) => b.rating - a.rating);

  const nameAscending = [...session].sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  const nameDescending = [...session].sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1
  );

  const yeastAscending = [...session].sort((a, b) =>
    a.ingredients.yeast.toUpperCase() > b.ingredients.yeast.toUpperCase()
      ? 1
      : -1
  );

  const yeastDescending = [...session].sort((a, b) =>
    a.ingredients.yeast.toUpperCase() > b.ingredients.yeast.toUpperCase()
      ? -1
      : 1
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
      <div className="beer-list-sort-select">
        {/* Denne svg har jeg fundet på nettet */}
        <SortIcon />
        <select
          id="select_sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="session">Default</option>
          <option value="nameAscending">Name A-Z</option>
          <option value="nameDescending">Name Z-A</option>
          <option value="phAscending">ph &#129145;</option>
          <option value="phDescending">ph &#129147;</option>
          <option value="yeastAscending">Yeast A-Z</option>
          <option value="yeastDescending">Yeast Z-A</option>
          <option value="first_brewedAscending">First Brewed &#129145;</option>
          <option value="first_brewedDescending">First Brewed &#129147;</option>
          <option value="ratingAscending">Rating &#129145;</option>
          <option value="ratingDescending">Rating &#129147;</option>
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
