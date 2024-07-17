import GenreList from "./GenreList";
import RecentSearches from "./RecentSearches";

function DefaultSearchPageContent() {
  return (
    <div>
      <RecentSearches />
      <GenreList />
    </div>
  );
}

export default DefaultSearchPageContent;
