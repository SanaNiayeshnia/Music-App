import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import ArtistPageHeader from "../features/artists/ArtistPageHeader";
import ArtistPageMenu from "../features/artists/ArtistPageMenu";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";
import TopNav from "../ui/TopNav";

function ArtistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  return (
    <div>
      <TopNav transparent>
        {isMainScrolled && <NavTitle>Conan Gray</NavTitle>}
      </TopNav>
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
