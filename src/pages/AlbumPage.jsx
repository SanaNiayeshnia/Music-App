import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import TopNav from "../ui/TopNav";
import AlbumPageHeader from "../features/albums/AlbumPageHeader";
import PageBody from "../ui/PageBody";
import TrackList from "../features/albums/TrackList";
import License from "../features/albums/License";
import MoreByArtist from "../features/artists/MoreByArtist";
import PageMenu from "../ui/PageMenu";

function AlbumPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  return (
    <div className="pb-5">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>Conan Gray</NavTitle>}
      </TopNav>
      <AlbumPageHeader />
      <PageBody>
        <PageMenu />
        <TrackList />
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
