import ItemFrust from "./ItemFruts";

const ListFrust = ({ fruts }) => {
  return (
    <ul>
      {fruts.map((frut, index) => {
        return <ItemFrust key={index} frut={frut} />;
      })}
    </ul>
  );
};

export default ListFrust;
