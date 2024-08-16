import RecentlyPlayed from "../features/player/RecentlyPlayed";
import FeaturedPlaylists from "../features/playlists/FeaturedPlaylists";
import TopNav from "../ui/TopNav";

function HomePage() {
  return (
    <div>
      <TopNav />
      <div className="space-y-10">
        <RecentlyPlayed />
        <FeaturedPlaylists />
      </div>
    </div>
  );
}

export default HomePage;
