import ArtistPageHeader from "../features/artists/ArtistPageHeader";
import ArtistPageMenu from "../features/artists/ArtistPageMenu";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";

function ArtistPage() {
  return (
    <div>
      <ArtistPageHeader />
      <div className="h-60 space-y-10 bg-gradient-to-b from-white from-[1%] px-5 dark:from-black">
        <ArtistPageMenu />
        <Popular />
        <Discography />
      </div>
    </div>
  );
}

export default ArtistPage;
