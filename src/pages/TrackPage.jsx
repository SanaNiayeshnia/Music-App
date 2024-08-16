import TopNav from "../ui/TopNav";
import NavTitle from "../ui/NavTitle";
import PageBody from "../ui/PageBody";
import RecommendedTracks from "../features/tracks/RecommendedTracks";
import PageHeader from "../ui/PageHeader";
import { useParams } from "react-router-dom";
import useTrack from "../features/tracks/useTrack";
import Spinner from "../ui/Spinner";
import useArtist from "../features/artists/useArtist";
import useRecommendations from "../features/tracks/useRecommendations";
import TrackPageMenu from "../features/tracks/TrackPageMenu";
import useMainContext from "../ui/layout/useMainContext";

function TrackPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingTrack, track } = useTrack(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    track?.artists[0]?.id,
  );
  const { isLoading: isLoadingRecommendation, recommendations } =
    useRecommendations(id);

  return (
    <div className="h-full">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>{track?.name}</NavTitle>}
      </TopNav>
      {isLoadingArtist || isLoadingTrack || isLoadingRecommendation ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PageHeader item={track} artist={artist} />
          <PageBody>
            <TrackPageMenu track={track} />
            <RecommendedTracks recommendations={recommendations} />
          </PageBody>
        </>
      )}
    </div>
  );
}

export default TrackPage;
