import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";

function Discography() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>Discography</Title>
        <ShowAll>Show all</ShowAll>
      </div>

      <ListContainer>
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="album"
        />
      </ListContainer>
    </div>
  );
}

export default Discography;
