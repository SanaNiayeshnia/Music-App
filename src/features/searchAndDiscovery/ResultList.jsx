import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import Title from "../../ui/Title";

function ResultList({ title, items, isLoading }) {
  return (
    <div>
      <Title>{title}</Title>
      <ListContainer isLoading={isLoading}>
        {items?.map((item) => (
          <Item key={item.id} item={item} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default ResultList;
