import { TbMoodSad } from "react-icons/tb";

function NothingFound() {
  return (
    <p className="flex items-center gap-1 text-sm text-black dark:text-white">
      Nothing found!
      <TbMoodSad className="h-4 w-4 text-black duration-100 dark:text-white" />
    </p>
  );
}

export default NothingFound;
