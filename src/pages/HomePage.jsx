import RecentlyPlayed from "../features/player/RecentlyPlayed";
import PageBody from "../ui/PageBody";
import TopNav from "../ui/TopNav";

function HomePage() {
  return (
    <div>
      <TopNav />
      <PageBody className="pt-0">
        <RecentlyPlayed />
      </PageBody>
    </div>
  );
}

export default HomePage;
