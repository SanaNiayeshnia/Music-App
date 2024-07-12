import LibraryHeader from "./LibraryHeader";
import LibraryBody from "./Library body/LibraryBody";

function Library() {
  return (
    <div className="col-start-1 col-end-2 row-start-2 row-end-[-1] flex flex-col gap-4 rounded-md bg-white p-2 px-2 py-5 shadow-md dark:bg-glass-100">
      <LibraryHeader />
      <LibraryBody />
    </div>
  );
}

export default Library;
