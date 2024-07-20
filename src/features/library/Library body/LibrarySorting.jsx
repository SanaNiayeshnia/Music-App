import { RiListUnordered } from "react-icons/ri";

function LibrarySorting() {
  return (
    <div className="group flex cursor-pointer items-center gap-1 text-sm text-black dark:text-white">
      Recents
      <RiListUnordered className="min-h-7 min-w-7 rounded-full p-1 text-black duration-100 hover:shadow group-hover:bg-white/50 dark:text-white dark:group-hover:bg-black/40" />
    </div>
  );
}

export default LibrarySorting;
