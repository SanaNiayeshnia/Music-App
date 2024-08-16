import ListContainer from "../../ui/ListContainer";
import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useFollowedArtists from "../artists/useFollowedArtists";

function UsersFollowings({ all }) {
  const { isLoading, followedArtists } = useFollowedArtists();
  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>Following</Title>
        {!all && followedArtists?.length > 6 && (
          <ShowAll to="following">Show all</ShowAll>
        )}
      </div>
      {followedArtists?.length === 0 && <NothingFound />}
      <ListContainer all={all} isLoading={isLoading} items={followedArtists} />
    </div>
  );
}

export default UsersFollowings;
