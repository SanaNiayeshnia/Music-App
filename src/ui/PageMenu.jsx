import { RiAddCircleLine, RiMoreFill } from "react-icons/ri";
import PlayButton from "./PlayButton";
import Button from "./Button";

function PageMenu({ type }) {
  return (
    <div className="flex items-center gap-5">
      <PlayButton className="min-h-14 min-w-14" />
      {type === "artist" ? (
        <Button>Follow</Button>
      ) : (
        <RiAddCircleLine className="min-h-6 min-w-6 cursor-pointer text-gray-900 hover:scale-110 dark:text-white" />
      )}

      <RiMoreFill className="min-h-6 min-w-6 cursor-pointer text-gray-900 hover:scale-110 dark:text-white" />
    </div>
  );
}

export default PageMenu;
