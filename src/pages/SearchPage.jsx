import GenreList from "../features/searchAndDiscovery/GenreList";
import RecentSearches from "../features/searchAndDiscovery/RecentSearches";

function SearchPage() {
  return (
    <div className="space-y-10 px-5 pb-5 pt-[70px]">
      <RecentSearches />
      <GenreList />
    </div>
  );
}

export default SearchPage;
