import { useDispatch } from "react-redux";
import ListContainer from "../../ui/ListContainer";
import useUsersTopArtists from "./hooks/useUsersTopArtists";
import { useEffect } from "react";
import { setPageTitle } from "../../GlobalSlice";

function UsersTopArtists({ all }) {
  const { isLoading, usersTopArtists } = useUsersTopArtists();
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle(`Your Top Artists`));
    }
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch, all]);

  return (
    <ListContainer
      all={all}
      isLoading={isLoading}
      items={usersTopArtists}
      title={`${all ? "Your " : ""} Top Artists`}
      showAllTo="top/artists"
    />
  );
}

export default UsersTopArtists;
