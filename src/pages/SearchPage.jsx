import RecentSearches from "../features/searchAndDiscovery/RecentSearches";
import useScrollbar from "../hooks/useScrollbar";
import Title from "../ui/Title";

function SearchPage() {
  const ref = useScrollbar();

  return (
    <div
      className="scrollbar hide-scroll max-h-[500px] overflow-scroll px-3 pb-5"
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <Title>Recent Searches</Title>
        <p className="cursor-pointer text-sm font-semibold text-gray-600 hover:text-base hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Show all
        </p>
      </div>
      <RecentSearches />
      <RecentSearches />
      <RecentSearches />
      <Title>Browse all</Title>
    </div>
  );
}

export default SearchPage;
