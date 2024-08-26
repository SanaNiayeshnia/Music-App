import { useEffect } from "react";
import ListContainer from "../../ui/ListContainer";
import useFollowedArtists from "../artists/hooks/useFollowedArtists";
import { setPageTitle } from "../../GlobalSlice";
import { useDispatch } from "react-redux";

function UsersFollowings({ all }) {
  const { isLoading, followedArtists } = useFollowedArtists();
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle(`Your Following`));
    }
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch, all]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        all={all}
        isLoading={isLoading}
        items={followedArtists}
        title={`${all ? "Your " : ""}Following`}
        showAllTo="following"
      />
    </div>
  );
}

export default UsersFollowings;
