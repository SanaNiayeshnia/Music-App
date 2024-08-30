import NavTitle from "../ui/layout/topNav/NavTitle";
import TopNav from "../ui/layout/topNav/TopNav";
import PageBody from "../ui/layout/page/PageBody";
import License from "../features/albums/License";
import MoreByArtist from "../features/artists/MoreByArtist";
import PageHeader from "../ui/layout/page/PageHeader";
import TrackList from "../features/tracks/TrackList";
import useAlbum from "../features/albums/hooks/useAlbum";
import { useParams } from "react-router-dom";
import useArtist from "../features/artists/hooks/useArtist";
import { formatDate } from "../utilities/helper";
import Spinner from "../ui/Spinner";
import useMainContext from "../ui/layout/main/useMainContext";
import PageMenu from "../ui/layout/page/PageMenu";
import Page from "../ui/layout/page/Page";

function AlbumPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingAlbum, album } = useAlbum(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    album?.artists[0]?.id,
  );

  return (
    <Page>
      <TopNav>{isMainScrolled && <NavTitle>{album?.name}</NavTitle>}</TopNav>
      {isLoadingAlbum || isLoadingArtist ? (
        <div className="grid h-[calc(100%-52px)] place-items-center">
          <Spinner className="h-24 w-24" />
        </div>
      ) : (
        <>
          <PageHeader item={album} artist={artist} />
          <PageBody>
            <PageMenu item={album} />
            <TrackList
              all={true}
              items={album?.tracks?.items?.map((item) => {
                return { ...item, album };
              })}
              noCover
              noAlbum
              extra="stream"
            />
            <License
              release={formatDate(album?.release_date)}
              copyright={album?.copyrights[0]?.text}
              soundRecording={album?.copyrights[1]?.text}
            />
            <MoreByArtist />
          </PageBody>
        </>
      )}
    </Page>
  );
}

export default AlbumPage;
