import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import ArtistPageHeader from "../features/artists/ArtistPageHeader";
import ArtistPageMenu from "../features/artists/ArtistPageMenu";
import Discography from "../features/artists/Discography";
import Popular from "../features/artists/Popular";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";

function ArtistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  return (
    <div className="pb-5">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>Conan Gray</NavTitle>}
      </TopNav>
      <ArtistPageHeader />
      <PageBody>
        <ArtistPageMenu />
        <Popular />
        <Discography />
      </PageBody>
    </div>
  );
}

export default ArtistPage;
