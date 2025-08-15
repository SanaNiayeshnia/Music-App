import NewReleases from "../features/albums/NewReleases";
import RecentlyPlayed from "../features/player/RecentlyPlayed";
import TopNav from "../ui/layout/topNav/TopNav";
import Page from "../ui/layout/page/Page";
import PageBody from "../ui/layout/page/PageBody";
import CategoryList from "../features/searchAndDiscovery/CategoryList";
import UsersTopArtists from "../features/users/UsersTopArtists";

function HomePage() {
  return (
    <Page>
      <TopNav />
      <PageBody noPadding>
        <RecentlyPlayed />
        <NewReleases />
        <UsersTopArtists />
        <CategoryList />
      </PageBody>
    </Page>
  );
}

export default HomePage;
