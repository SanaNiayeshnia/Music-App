import ShowAll from "./ShowAll";
import Title from "./Title";

function ListTitle({ title, conditionForShowAll = true, showAllTo }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <Title>{title}</Title>
      {conditionForShowAll && <ShowAll to={showAllTo}>Show all</ShowAll>}
    </div>
  );
}

export default ListTitle;
