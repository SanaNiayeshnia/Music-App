import { RiAddCircleLine, RiListUnordered, RiMoreFill } from "react-icons/ri";
import PlayButton from "./PlayButton";
import Button from "./Button";

function PageMenu({ type }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <PlayButton className="min-h-14 min-w-14" />
        {type === "artist" ? (
          <Button>Follow</Button>
        ) : (
          <RiAddCircleLine className="min-h-6 min-w-6 cursor-pointer text-gray-900 duration-100 hover:scale-110 dark:text-white" />
        )}

        <RiMoreFill className="min-h-6 min-w-6 cursor-pointer text-gray-900 duration-100 hover:scale-110 dark:text-white" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 dark:text-white">List</span>
        <RiListUnordered className="min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-gray-900 duration-100 hover:bg-blue-50 dark:text-white dark:hover:bg-glass-100" />
      </div>
    </div>
  );
}

export default PageMenu;
