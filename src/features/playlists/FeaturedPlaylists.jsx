import { useEffect } from "react";
import ListContainer from "../../ui/ListContainer";
import useFeaturedPlaylists from "./useFeaturedPlaylists";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function FeaturedPlaylists({ all }) {
  const { isLoading, featuredPlaylists } = useFeaturedPlaylists();
  const dispatch = useDispatch();

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    dispatch(setPageTitle("Featured Playlists"));
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title="Featured Playlists"
        showAllTo="/section/featured-playlists"
        isLoading={isLoading}
        all={all}
        items={featuredPlaylists}
      />
    </div>
  );
}

export default FeaturedPlaylists;
