import { useSelector } from "react-redux";
import TopNav from "../ui/TopNav";
import NavTitle from "../ui/NavTitle";
import PageBody from "../ui/PageBody";
import PageMenu from "../ui/PageMenu";
import RecommendedTracks from "../features/tracks/RecommendedTracks";
import PageHeader from "../ui/PageHeader";

function TrackPage() {
  const { isMainScrolled } = useSelector((store) => store.global);

  return (
    <div className="pb-5">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>People Watching</NavTitle>}
      </TopNav>
      <PageHeader
        background="/header.png"
        artistPic="/test.png"
        cover="/test.png"
        type="song"
        title="People Watching"
        something={
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            <span className="font-semibold text-gray-900 dark:text-white">
              Superache
            </span>{" "}
            • 2022 • 1:32 • 412,334,745
          </p>
        }
      />
      <PageBody>
        <PageMenu />
        <RecommendedTracks />
      </PageBody>
    </div>
  );
}

export default TrackPage;
