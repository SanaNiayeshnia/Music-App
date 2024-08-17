import NavTitle from "../ui/NavTitle";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import useArtist from "../features/artists/useArtist";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import useArtistsTopTracks from "../features/artists/useArtistsTopTracks";
import RelatedArtists from "../features/artists/RelatedArtists";
import AppearsOn from "../features/artists/AppearsOn";
import useMainContext from "../ui/layout/useMainContext";
import PersonPageHeader from "../ui/PersonPageHeader";
import PageMenu from "../ui/PageMenu";

function ArtistPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const { isLoading: isLoadingArtistsTopTracks, artistsTopTracks } =
    useArtistsTopTracks(id);

  return (
    <div className="h-full w-full">
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
    </div>
  );
}

export default ArtistPage;
