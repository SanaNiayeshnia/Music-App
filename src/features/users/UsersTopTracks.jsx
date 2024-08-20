import { useEffect } from "react";
import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import TrackList from "../tracks/TrackList";
import useUsersTopTracks from "./useUsersTopTracks";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function UsersTopTracks({ all }) {
  const { isLoading, usersTopTracks } = useUsersTopTracks();
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    dispatch(setPageTitle(`Your Top Tracks`));
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch]);

  return (
    <div className="min-w-96 flex-grow">
      <div className="flex items-center justify-between">
        <Title>{all ? "Your " : ""}Top Tracks</Title>

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
