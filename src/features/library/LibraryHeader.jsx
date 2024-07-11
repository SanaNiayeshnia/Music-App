import { RiAddFill, RiBookmark3Line } from "react-icons/ri";

function LibraryHeader() {
  return (
    <div className="flex items-center justify-between text-gray-900 dark:text-white">
      <div className="flex items-center gap-2">
        <RiBookmark3Line className="min-h-6 min-w-6 duration-100" />
        library
      </div>
      <RiAddFill className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 hover:bg-blue-50 dark:hover:bg-glass-100" />
    </div>
  );
}

export default LibraryHeader;
