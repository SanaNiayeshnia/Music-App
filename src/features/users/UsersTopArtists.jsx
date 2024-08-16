import ListContainer from "../../ui/ListContainer";
import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useUsersTopArtists from "./useUsersTopArtists";

function UsersTopArtists({ all }) {
  const { isLoading, usersTopArtists } = useUsersTopArtists();
  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        all={all}
        isLoading={isLoading}
        items={usersTopArtists}
        title="Top Artists"
        showAllTo="top/artists"
      />
    </div>
  );
}

export default UsersTopArtists;
