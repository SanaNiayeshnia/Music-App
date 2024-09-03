import { useEffect } from "react";
import ListContainer from "../../ui/ListContainer";
import useRecentlyPlayed from "./hooks/useRecentlyPlayed";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function RecentlyPlayed({ all = false }) {
  const { isLoading, recentlyPlayedItems } = useRecentlyPlayed({ all });
  const dispatch = useDispatch();
  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle("Recently Played"));
      return () => {
        dispatch(setPageTitle(""));
      };
    }
  }, [dispatch, all]);

  return (
    <ListContainer
      title="Recently Played"
      showAllTo="/section/recently-played"
      alwaysShowAll={!isLoading}
      all={all}
      items={recentlyPlayedItems}
      isLoading={isLoading}
    />
  );
}

export default RecentlyPlayed;
