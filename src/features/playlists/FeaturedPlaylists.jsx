import ListContainer from "../../ui/ListContainer";
import useFeaturedPlaylists from "./useFeaturedPlaylists";

function FeaturedPlaylists({ all }) {
  const { isLoading, featuredPlaylists } = useFeaturedPlaylists();
  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title="Featured Playlists"
        showAllTo="/section/featured-playlists"
        isLoading={isLoading}
        all={all}
        items={featuredPlaylists}
      />
    </div>
  );
}

export default FeaturedPlaylists;
