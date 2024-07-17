import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";

function RecentSearches() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>Recent Searches</Title>
        <ShowAll>Show all</ShowAll>
      </div>
      <ListContainer className="overflow-hidden">
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
          type="artist"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="Album"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="artist"
        />
        <Item
          title="Future Nostalgia"
          subtitle="Dua Lipa"
          size="large"
          type="Album"
        />
        <Item title="DuaLipa" subtitle="Artist" size="large" type="artist" />
      </ListContainer>
    </div>
  );
}

export default RecentSearches;
