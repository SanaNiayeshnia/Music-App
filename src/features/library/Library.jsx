import LibraryHeader from "./LibraryHeader";
import LibraryBody from "./Library body/LibraryBody";

function Library() {
  return (
    <div className="col-start-1 col-end-2 row-start-2 row-end-[-1] flex flex-col gap-3 rounded-lg bg-white/40 pt-5 shadow-lg backdrop-blur-md dark:bg-black/40">
      <LibraryHeader />
      <LibraryBody />
    </div>
  );
}

export default Library;
