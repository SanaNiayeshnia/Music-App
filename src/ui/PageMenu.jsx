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
          <RiAddCircleLine className="min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
        )}

        <RiMoreFill className="min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-black dark:text-white">List</span>
        <RiListUnordered className="min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white/70 hover:shadow dark:text-white dark:hover:bg-black" />
      </div>
    </div>
  );
}

export default PageMenu;
