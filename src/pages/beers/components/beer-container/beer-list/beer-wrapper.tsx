import Beer from "../beer-display";

export default function BeerWrapper(props: any) {
  let context = props.data;
  return (
    <>
      {context.map((beer: any) => (
        <Beer data={beer} />
      ))}
    </>
  );
}
