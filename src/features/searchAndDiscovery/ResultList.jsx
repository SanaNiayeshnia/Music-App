import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import Title from "../../ui/Title";

function ResultList({ title, type }) {
  return (
    <div>
      <Title>{title}</Title>
      <ListContainer>
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
        <Item title="DuaLipa" subtitle="Artist" size="large" type={type} />
      </ListContainer>
    </div>
  );
}

export default ResultList;
