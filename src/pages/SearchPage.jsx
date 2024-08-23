import { useSearchParams } from "react-router-dom";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/TopNav";
import DefaultSearchPageContent from "../features/searchAndDiscovery/DefaultSearchPageContent";
import SearchResults from "../features/searchAndDiscovery/SearchResults";
import Page from "../ui/Page";
import PageBody from "../ui/PageBody";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.has("q");
  const genre = searchParams.has("genre");

  return (
    <Page>
      <TopNav>
        <SearchBox />
      </TopNav>
      {query || genre ? <SearchResults /> : <DefaultSearchPageContent />}
    </Page>
  );
}

export default SearchPage;
