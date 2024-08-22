import { useSelector } from "react-redux";
import NewReleases from "../features/albums/NewReleases";
import RecentlyPlayed from "../features/player/RecentlyPlayed";
import FeaturedPlaylists from "../features/playlists/FeaturedPlaylists";
import TopNav from "../ui/TopNav";

function HomePage() {
  const { isSmall } = useSelector((store) => store.global);
  return (
    <div>
      <TopNav />
      <div className={`${isSmall && "pb-[75px]"} space-y-8`}>
        <RecentlyPlayed />
        <FeaturedPlaylists />
        <NewReleases />
      </div>
    </div>
  );
}

export default HomePage;
