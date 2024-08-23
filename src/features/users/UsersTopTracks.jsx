import { useEffect } from "react";
import NothingFound from "../../ui/NothingFound";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import TrackList from "../tracks/TrackList";
import useUsersTopTracks from "./useUsersTopTracks";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";
import ListTitle from "../../ui/ListTitle";

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
    <div>
      <ListTitle
        showAllTo="top/tracks"
        title={(all ? "Your " : "") + "Top Tracks"}
        conditionForShowAll={!all && usersTopTracks?.length > 4}
      />
      {usersTopTracks?.length === 0 && <NothingFound />}
      <TrackList items={usersTopTracks} all={all} isLoading={isLoading} />
    </div>
  );
}

export default UsersTopTracks;
