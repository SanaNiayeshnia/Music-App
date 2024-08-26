import TopNav from "../ui/layout/topNav/TopNav";
import NavTitle from "../ui/layout/topNav/NavTitle";
import PageBody from "../ui/layout/page/PageBody";
import RecommendedTracks from "../features/tracks/RecommendedTracks";
import PageHeader from "../ui/layout/page/PageHeader";
import { useParams } from "react-router-dom";
import useTrack from "../features/tracks/hooks/useTrack";
import Spinner from "../ui/Spinner";
import useArtist from "../features/artists/hooks/useArtist";
import useRecommendations from "../features/tracks/hooks/useRecommendations";
import useMainContext from "../ui/layout/Main/useMainContext";
import PageMenu from "../ui/layout/page/PageMenu";
import Page from "../ui/layout/page/Page";

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
    <Page>
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
            <PageMenu item={track} />
            <RecommendedTracks recommendations={recommendations} />
          </PageBody>
        </>
      )}
    </Page>
  );
}

export default TrackPage;
