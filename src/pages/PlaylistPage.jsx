import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import PageHeader from "../ui/PageHeader";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import PageMenu from "../ui/PageMenu";
import AlsoLikePlaylists from "../features/playlists/AlsoLikePlaylists";
import TrackList from "../features/tracks/TrackList";

function PlaylistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  return (
    <div>
      <TopNav transparent>
        {isMainScrolled && <NavTitle>Conan Gray</NavTitle>}
      </TopNav>
      <PageHeader
        background="/header.png"
        artistPic="/spotify-logo.png"
        cover="/test.png"
        type="playlist"
        title="All Out Of 80s"
        something={
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            <span className="font-semibold text-gray-900 dark:text-white">
              Spotify
            </span>{" "}
            • 32,455,093 saves • 150 songs, about 1 hr
          </p>
        }
      />
      <PageBody>
        <PageMenu />
        <TrackList extra="date" />
        <AlsoLikePlaylists />
      </PageBody>
    </div>
  );
}

export default PlaylistPage;
