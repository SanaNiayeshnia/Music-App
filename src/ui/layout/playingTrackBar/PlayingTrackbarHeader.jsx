import { RiCloseFill, RiMoreFill } from "react-icons/ri";

function PlayingTrackbarHeader() {
  return (
    <div className="flex items-center justify-between text-gray-900 dark:text-white">
      <p className="text-sm font-semibold">Houdini</p>
      <div className="flex items-center gap-2">
        <RiMoreFill className="dark:hover:bg-black-100 min-h-8 min-w-8 cursor-pointer rounded-full p-1 hover:bg-blue-50" />
        <RiCloseFill className="dark:hover:bg-black-100 min-h-8 min-w-8 cursor-pointer rounded-full p-1 hover:bg-blue-50" />
      </div>
    </div>
  );
}

export default PlayingTrackbarHeader;
