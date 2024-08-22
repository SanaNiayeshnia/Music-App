import { useEffect } from "react";
import ListContainer from "../../ui/ListContainer";
import useRecentlyPlayed from "./useRecentlyPlayed";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function RecentlyPlayed({ all = false }) {
  const { isLoading, recentlyPlayedItems } = useRecentlyPlayed({ all });
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    dispatch(setPageTitle("Recently Played"));
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title="Recently Played"
        showAllTo="/section/recently-played"
        alwaysShowAll
        all={all}
        items={recentlyPlayedItems}
        isLoading={isLoading}
      />
    </div>
  );
}

export default RecentlyPlayed;
