import TopNav from "../ui/layout/topNav/TopNav";
import NavTitle from "../ui/layout/topNav/NavTitle";
import PageBody from "../ui/layout/page/PageBody";
import RecommendedTracks from "../features/tracks/RecommendedTracks";
import PageHeader from "../ui/layout/page/PageHeader";
import { useParams } from "react-router-dom";
import useTrack from "../features/tracks/hooks/useTrack";
import Spinner from "../ui/Spinner";
import useArtist from "../features/artists/hooks/useArtist";
import useMainContext from "../ui/layout/main/useMainContext";
import PageMenu from "../ui/layout/page/PageMenu";
import Page from "../ui/layout/page/Page";
import useArtistsTopTracks from "../features/artists/hooks/useArtistsTopTracks";

function TrackPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingTrack, track } = useTrack(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    track?.artists[0]?.id,
  );
  const { isLoading: isLoadingArtistsTopTracks, artistsTopTracks } =
    useArtistsTopTracks(track?.artists?.[0]?.id);
  return (
    <Page>
      <TopNav transparent>
        {isMainScrolled && <NavTitle>{track?.name}</NavTitle>}
      </TopNav>
      {isLoadingArtist || isLoadingTrack ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PageHeader item={track} artist={artist} />
          <PageBody>
            <PageMenu item={track} />
            <RecommendedTracks
              recommendations={artistsTopTracks?.filter(
                (item) => item.id !== id,
              )}
              isLoading={isLoadingArtistsTopTracks}
            />
          </PageBody>
        </>
      )}
    </Page>
  );
}

export default TrackPage;
