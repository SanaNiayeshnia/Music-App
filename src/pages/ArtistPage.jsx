import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import ArtistPageHeader from "../features/artists/ArtistPageHeader";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import PageMenu from "../ui/PageMenu";

function ArtistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  return (
    <div className="w-full">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>Conan Gray</NavTitle>}
      </TopNav>
      <ArtistPageHeader />
      <PageBody>
        <PageMenu type="artist" />
        <Popular />
        <Discography />
      </PageBody>
    </div>
  );
}

export default ArtistPage;
