import { RiAddCircleLine, RiListUnordered, RiMoreFill } from "react-icons/ri";
import PlayButton from "./PlayButton";
import Button from "./Button";
import { TbDots, TbList } from "react-icons/tb";

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

        <TbDots className="min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-black dark:text-white">List</span>
        <TbList className="min-h-6 min-w-6 cursor-pointer rounded-full text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
      </div>
    </div>
  );
}

export default PageMenu;
