import { useEffect } from "react";
import NewReleases from "../features/albums/NewReleases";
import RecentlyPlayed from "../features/player/RecentlyPlayed";
import FeaturedPlaylists from "../features/playlists/FeaturedPlaylists";
import TopNav from "../ui/TopNav";
import { setPageTitle } from "../GlobalSlice";
import { useDispatch } from "react-redux";
import { APP_NAME } from "../utilities/constants";
import Icon from "../ui/Icon";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setPageTitle(
        <>
          <Icon /> {APP_NAME}
        </>,
      ),
    );

    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch]);

  return (
    <div>
      <TopNav />
      <div className="space-y-8">
        <RecentlyPlayed />
        <FeaturedPlaylists />
        <NewReleases />
      </div>
    </div>
  );
}

export default HomePage;
