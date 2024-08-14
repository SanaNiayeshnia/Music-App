import { useSearchParams } from "react-router-dom";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/TopNav";
import DefaultSearchPageContent from "../features/searchAndDiscovery/DefaultSearchPageContent";
import SearchResults from "../features/searchAndDiscovery/SearchResults";
import PageHeaderWrapper from "../ui/PageHeaderWrapper";
import PageTitle from "../ui/PageTitle";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const genre = searchParams.get("genre");

  return (
    <div className="h-full">
      <TopNav>
        <SearchBox />
      </TopNav>
      <div className="h-full space-y-10">
        {genre && (
          <PageHeaderWrapper
            short
            className="text-3xl font-bold first-letter:uppercase"
          >
            <PageTitle>{genre} Genre</PageTitle>
          </PageHeaderWrapper>
        )}
        {query || genre ? <SearchResults /> : <DefaultSearchPageContent />}
      </div>
    </div>
  );
}

export default SearchPage;
