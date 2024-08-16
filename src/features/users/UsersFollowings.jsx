import ListContainer from "../../ui/ListContainer";
import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useFollowedArtists from "../artists/useFollowedArtists";

function UsersFollowings({ all }) {
  const { isLoading, followedArtists } = useFollowedArtists();
  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        all={all}
        isLoading={isLoading}
        items={followedArtists}
        title="Following"
        showAllTo="following"
      />
    </div>
  );
}

export default UsersFollowings;
