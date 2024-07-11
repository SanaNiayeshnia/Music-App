import { RiListUnordered } from "react-icons/ri";

function LibrarySorting() {
  return (
    <div className="group flex cursor-pointer items-center gap-1 text-sm text-gray-900 dark:text-white">
      Recents
      <RiListUnordered className="min-h-7 min-w-7 rounded-full p-1 text-gray-900 duration-100 group-hover:bg-blue-50 dark:text-white dark:group-hover:bg-glass-100" />
    </div>
  );
}

export default LibrarySorting;
