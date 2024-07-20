import { TbList } from "react-icons/tb";

function LibrarySorting() {
  return (
    <div className="group flex cursor-pointer items-center gap-1 text-sm text-black dark:text-white">
      Recents
      <TbList className="min-h-5 min-w-5 rounded-full text-black duration-100 group-hover:text-blue-600 dark:text-white" />
    </div>
  );
}

export default LibrarySorting;
