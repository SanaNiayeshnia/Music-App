import ListContainer from "../../ui/ListContainer";
import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useUsersTopArtists from "./useUsersTopArtists";

function UsersTopArtists({ all }) {
  const { isLoading, usersTopArtists } = useUsersTopArtists();
  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>Top Artists </Title>
        {!all && usersTopArtists?.length > 6 && (
          <ShowAll to="top/artists">Show all</ShowAll>
        )}
      </div>
      {usersTopArtists?.length === 0 && <NothingFound />}
      <ListContainer all={all} isLoading={isLoading} items={usersTopArtists} />
    </div>
  );
}

export default UsersTopArtists;
