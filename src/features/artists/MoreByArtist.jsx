import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import Title from "../../ui/Title";

function MoreByArtist() {
  return (
    <div>
      <Title>More By Conan Gray</Title>
      <ListContainer>
        <Item size="large" type="album" title="Found Heaven" subtitle="2024" />
        <Item size="large" type="album" title="Found Heaven" subtitle="2024" />
        <Item size="large" type="album" title="Found Heaven" subtitle="2024" />
        <Item size="large" type="album" title="Found Heaven" subtitle="2024" />
        <Item size="large" type="album" title="Found Heaven" subtitle="2024" />
        <Item size="large" type="album" title="Found Heaven" subtitle="2024" />
      </ListContainer>
    </div>
  );
}

export default MoreByArtist;
