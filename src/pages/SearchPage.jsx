import { useSearchParams } from "react-router-dom";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/TopNav";
import DefaultSearchPageContent from "../features/searchAndDiscovery/DefaultSearchPageContent";
import SearchResults from "../features/searchAndDiscovery/SearchResults";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div>
      <TopNav>
        <SearchBox />
      </TopNav>
      <div className="space-y-10">
        {query ? <SearchResults /> : <DefaultSearchPageContent />}
      </div>
    </div>
  );
}

export default SearchPage;
