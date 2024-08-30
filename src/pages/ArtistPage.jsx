import NavTitle from "../ui/layout/topNav/NavTitle";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";
import TopNav from "../ui/layout/topNav/TopNav";
import PageBody from "../ui/layout/page/PageBody";
import useArtist from "../features/artists/hooks/useArtist";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import useArtistsTopTracks from "../features/artists/hooks/useArtistsTopTracks";
import RelatedArtists from "../features/artists/RelatedArtists";
import AppearsOn from "../features/artists/AppearsOn";
import PersonPageHeader from "../ui/layout/page/PersonPageHeader";
import PageMenu from "../ui/layout/page/PageMenu";
import Page from "../ui/layout/page/Page";
import useMainContext from "../ui/layout/main/useMainContext";

function ArtistPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const { isLoading: isLoadingArtistsTopTracks, artistsTopTracks } =
    useArtistsTopTracks(id);

  return (
    <Page>
      <TopNav>{isMainScrolled && <NavTitle>{artist?.name}</NavTitle>}</TopNav>
      {isLoadingArtist || isLoadingArtistsTopTracks ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PersonPageHeader person={artist} />
          <PageBody>
            <PageMenu item={artist} />
            <Popular artistsTopTracks={artistsTopTracks} />
            <Discography />
            <AppearsOn />
            <RelatedArtists />
          </PageBody>
        </>
      )}
    </Page>
  );
}

export default ArtistPage;
