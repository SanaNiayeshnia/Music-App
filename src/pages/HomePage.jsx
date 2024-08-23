import NewReleases from "../features/albums/NewReleases";
import RecentlyPlayed from "../features/player/RecentlyPlayed";
import FeaturedPlaylists from "../features/playlists/FeaturedPlaylists";
import TopNav from "../ui/TopNav";
import Page from "../ui/Page";
import PageBody from "../ui/PageBody";

function HomePage() {
  return (
    <Page>
      <TopNav />
      <PageBody noPadding>
        <RecentlyPlayed />
        <FeaturedPlaylists />
        <NewReleases />
      </PageBody>
    </Page>
  );
}

export default HomePage;
