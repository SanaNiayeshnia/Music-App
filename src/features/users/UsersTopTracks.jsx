import { useEffect } from "react";
import TrackList from "../tracks/TrackList";
import useUsersTopTracks from "./hooks/useUsersTopTracks";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";
import ListTitle from "../../ui/ListTitle";

function UsersTopTracks({ all }) {
  const { isLoading, usersTopTracks } = useUsersTopTracks();
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle(`Your Top Tracks`));
    }
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch, all]);

  return (
    (isLoading || usersTopTracks?.length > 0) && (
      <div className="min-h-80">
        <ListTitle
          showAllTo="top/tracks"
          title={(all ? "Your " : "") + "Top Tracks"}
          conditionForShowAll={!all && usersTopTracks?.length > 4}
        />
        <TrackList items={usersTopTracks} all={all} isLoading={isLoading} />
      </div>
    )
  );
}

export default UsersTopTracks;
