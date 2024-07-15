import { useSelector } from "react-redux";
import TopNav from "../ui/TopNav";
import NavTitle from "../ui/NavTitle";
import TrackPageHeader from "../features/tracks/TrackPageHeader";
import PageBody from "../ui/PageBody";
import PageMenu from "../ui/PageMenu";
import RecommendedTracks from "../features/tracks/RecommendedTracks";

function TrackPage() {
  const { isMainScrolled } = useSelector((store) => store.global);

  return (
    <div className="pb-5">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>People Watching</NavTitle>}
      </TopNav>
      <TrackPageHeader />
      <PageBody>
        <PageMenu />
        <RecommendedTracks />
      </PageBody>
    </div>
  );
}

export default TrackPage;
