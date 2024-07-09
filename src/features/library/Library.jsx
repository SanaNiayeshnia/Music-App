import LibraryHeader from "./LibraryHeader";
import LibraryBody from "./Library body/LibraryBody";

function Library() {
  return (
    <div className="col-start-1 col-end-2 flex max-h-[468px] flex-col gap-4 rounded-md bg-white p-2 px-4 py-5 shadow-md dark:bg-glass-100">
      <LibraryHeader />
      <LibraryBody />
    </div>
  );
}

export default Library;
