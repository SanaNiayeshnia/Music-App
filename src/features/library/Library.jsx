import LibraryHeader from "./LibraryHeader";
import LibraryBody from "./Library body/LibraryBody";

function Library() {
  return (
    <div className="col-start-1 col-end-2 row-start-2 row-end-[-1] hidden flex-col gap-3 rounded-lg bg-white/50 pt-5 shadow-lg backdrop-blur-md md:flex dark:bg-black/50">
      <LibraryHeader />
      <LibraryBody />
    </div>
  );
}

export default Library;
