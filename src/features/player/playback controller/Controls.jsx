import {
  RiPlayCircleFill,
  RiRepeat2Fill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";
function Controls() {
  return (
    <div className="flex items-center justify-center gap-3 text-gray-800 dark:text-white">
      <RiShuffleFill className="min-h-6 min-w-6 cursor-pointer duration-300 hover:text-gray-900 dark:hover:text-blue-100" />
      <RiSkipBackFill className="min-h-6 min-w-6 cursor-pointer duration-300 hover:text-gray-900 dark:hover:text-blue-100" />
      <RiPlayCircleFill className="min-h-10 min-w-10 cursor-pointer text-blue-600 duration-300 hover:scale-105" />
      <RiSkipForwardFill className="min-h-6 min-w-6 cursor-pointer duration-300 hover:text-gray-900 dark:hover:text-blue-100" />
      <RiRepeat2Fill className="min-h-6 min-w-6 cursor-pointer duration-300 hover:text-gray-900 dark:hover:text-blue-100" />
    </div>
  );
}

export default Controls;
