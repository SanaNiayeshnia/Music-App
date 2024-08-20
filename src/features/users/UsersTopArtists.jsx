import { useDispatch } from "react-redux";
import ListContainer from "../../ui/ListContainer";
import useUsersTopArtists from "./useUsersTopArtists";
import { useEffect } from "react";
import { setPageTitle } from "../../GlobalSlice";

function UsersTopArtists({ all }) {
  const { isLoading, usersTopArtists } = useUsersTopArtists();
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    dispatch(setPageTitle(`Your Top Artists`));
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        all={all}
        isLoading={isLoading}
        items={usersTopArtists}
        title={`${all ? "Your " : ""} Top Artists`}
        showAllTo="top/artists"
      />
    </div>
  );
}

export default UsersTopArtists;
