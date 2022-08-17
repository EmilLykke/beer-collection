import React from "react";
import { useParams } from "react-router-dom";

export default function BeerDetails(props: any) {
  const params = useParams();
  return (
    <div>
      <div>{params.id}</div>
    </div>
  );
}
