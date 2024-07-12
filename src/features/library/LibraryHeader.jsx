import { RiAddFill, RiBookmark3Line } from "react-icons/ri";

function LibraryHeader() {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
        <RiBookmark3Line className="min-h-6 min-w-6 text-gray-800 duration-100 dark:text-white" />
        library
      </div>
      <RiAddFill className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-gray-900 hover:bg-blue-50 dark:text-white dark:hover:bg-glass-100" />
    </div>
  );
}

export default LibraryHeader;
