import RecentlyPlayed from "../features/player/RecentlyPlayed";
import TopNav from "../ui/TopNav";

function HomePage() {
  return (
    <div>
      <TopNav />
      <div className="space-y-10">
        <RecentlyPlayed />
      </div>
    </div>
  );
}

export default HomePage;
