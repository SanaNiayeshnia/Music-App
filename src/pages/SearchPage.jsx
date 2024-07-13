import GenreList from "../features/searchAndDiscovery/GenreList";
import RecentSearches from "../features/searchAndDiscovery/RecentSearches";
import Title from "../ui/Title";

function SearchPage() {
  return (
    <div className="px-5 pb-5 pt-[55px]">
      <div className="flex items-center justify-between">
        <Title>Recent Searches</Title>
        <p className="cursor-pointer text-sm font-semibold text-gray-600 hover:text-base hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Show all
        </p>
      </div>
      <RecentSearches />
      <Title>Browse all</Title>
      <GenreList />
    </div>
  );
}

export default SearchPage;
