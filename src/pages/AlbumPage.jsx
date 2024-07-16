import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import License from "../features/albums/License";
import MoreByArtist from "../features/artists/MoreByArtist";
import PageMenu from "../ui/PageMenu";
import PageHeader from "../ui/PageHeader";
import TrackList from "../features/tracks/TrackList";

function AlbumPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  return (
    <div className="pb-5">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>Conan Gray</NavTitle>}
      </TopNav>
      <PageHeader
        background="/header.png"
        artistPic="/test.png"
        cover="/test.png"
        type="album"
        title="Superache"
        something={
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            <span className="font-semibold text-gray-900 dark:text-white">
              Conan Gray
            </span>{" "}
            • 2022 • 12 songs, 40 min 22 sec
          </p>
        }
      />
      <PageBody>
        <PageMenu />
        <TrackList noCover noAlbum extra="stream" />
        <License
          release="June 24, 2022"
          copyright="2022 Republic Records, a division of UMG Recordings, Inc."
          soundRecording=" 2022 Republic Records, a division of UMG Recordings, Inc."
        />
        <MoreByArtist />
      </PageBody>
    </div>
  );
}

export default AlbumPage;
