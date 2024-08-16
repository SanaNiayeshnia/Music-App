import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import TrackList from "../tracks/TrackList";
import useUsersTopTracks from "./useUsersTopTracks";

function UsersTopTracks({ all }) {
  const { isLoading, usersTopTracks } = useUsersTopTracks();
  return (
    <div className="min-w-96 flex-grow">
      <div className="flex items-center justify-between">
        <Title>Top Tracks</Title>

        {!all && usersTopTracks?.length > 4 && (
          <ShowAll to="top/tracks">Show all</ShowAll>
        )}
      </div>
      {usersTopTracks?.length === 0 && <NothingFound />}
      <TrackList items={usersTopTracks} all={all} isLoading={isLoading} />
    </div>
  );
}

export default UsersTopTracks;
