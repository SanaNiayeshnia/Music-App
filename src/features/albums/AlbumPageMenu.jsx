import PlayButton from "../../ui/PlayButton";
import { RiAddCircleLine, RiMoreFill } from "react-icons/ri";

function AlbumPageMenu() {
  return (
    <div className="flex items-center gap-5">
      <PlayButton className="min-h-14 min-w-14" />

      <RiAddCircleLine className="min-h-6 min-w-6 cursor-pointer text-gray-900 hover:scale-110 dark:text-white" />

      <RiMoreFill className="min-h-6 min-w-6 cursor-pointer text-gray-900 hover:scale-110 dark:text-white" />
    </div>
  );
}

export default AlbumPageMenu;
