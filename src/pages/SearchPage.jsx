import GenreList from "../features/searchAndDiscovery/GenreList";
import RecentSearches from "../features/searchAndDiscovery/RecentSearches";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/TopNav";

function SearchPage() {
  return (
    <div className="px-5 pb-5 pt-[70px]">
      <TopNav>
        <SearchBox />
      </TopNav>
      <div className="space-y-10">
        <RecentSearches />
        <GenreList />
      </div>
    </div>
  );
}

export default SearchPage;
