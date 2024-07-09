import LibraryList from "./Library list/LibraryList";
import LibraryFilters from "./LibraryFilters";
import LibrarySearchBox from "./LibrarySearchBox";
import LibrarySorting from "./LibrarySorting";

function LibraryBody() {
  return (
    <>
      <LibraryFilters />
      <div className="flex items-center justify-between text-gray-900 dark:text-white">
        <LibrarySearchBox />
        <LibrarySorting />
      </div>
      <LibraryList />
    </>
  );
}

export default LibraryBody;
