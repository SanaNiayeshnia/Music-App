import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import ArtistPageHeader from "../features/artists/ArtistPageHeader";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import PageMenu from "../ui/PageMenu";
import useArtist from "../features/artists/useArtist";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import useArtistsTopTracks from "../features/artists/useArtistsTopTracks";
import RelatedArtists from "../features/artists/RelatedArtists";
import AppearsOn from "../features/artists/AppearsOn";
import ArtistPageMenu from "../features/artists/ArtistPageMenu";

function ArtistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  const { id } = useParams();
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const { isLoading: isLoadingArtistsTopTracks, artistsTopTracks } =
    useArtistsTopTracks(id);

  return (
    <div className="h-full w-full">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>{artist?.name}</NavTitle>}
      </TopNav>
      {isLoadingArtist || isLoadingArtistsTopTracks ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <ArtistPageHeader artist={artist} />
          <PageBody>
            <ArtistPageMenu artist={artist} />
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
