import { useSearchParams } from "react-router-dom";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/layout/topNav/TopNav";
import DefaultSearchPageContent from "../features/searchAndDiscovery/DefaultSearchPageContent";
import SearchResults from "../features/searchAndDiscovery/SearchResults";
import Page from "../ui/layout/page/Page";
import IconLogo from "../ui/layout/topNav/IconLogo";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.has("q");

  return (
    <Page>
      <TopNav>
        <IconLogo noTitle />
        <SearchBox />
      </TopNav>
      {query ? <SearchResults /> : <DefaultSearchPageContent />}
    </Page>
  );
}

export default SearchPage;
