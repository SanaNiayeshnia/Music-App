import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useFeaturedPlaylists from "./useFeaturedPlaylists";

function FeaturedPlaylists({ all }) {
  const { isLoading, featuredPlaylists } = useFeaturedPlaylists();
  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>Featured Playlists</Title>
        {!all && <ShowAll to="/section/featured-playlists">Show all</ShowAll>}
      </div>
      <ListContainer isLoading={isLoading} all={all}>
        {featuredPlaylists?.map((playlist) => (
          <Item key={playlist.id} item={playlist} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default FeaturedPlaylists;
