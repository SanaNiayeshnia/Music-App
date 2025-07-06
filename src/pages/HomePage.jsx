import NewReleases from "../features/albums/NewReleases";
import RecentlyPlayed from "../features/player/RecentlyPlayed";
import FeaturedPlaylists from "../features/playlists/FeaturedPlaylists";
import TopNav from "../ui/layout/topNav/TopNav";
import Page from "../ui/layout/page/Page";
import PageBody from "../ui/layout/page/PageBody";
import MadeForYou from "../features/searchAndDiscovery/MadeForYou";
import CategoryList from "../features/searchAndDiscovery/CategoryList";

function HomePage() {
  return (
    <Page>
      <TopNav />
      <PageBody noPadding>
        <RecentlyPlayed />
        {/* <MadeForYou /> */}
        {/* <FeaturedPlaylists /> */}
        <CategoryList />
        <NewReleases />
      </PageBody>
    </Page>
  );
}

export default HomePage;
