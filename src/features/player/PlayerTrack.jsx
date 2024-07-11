import { RiAddCircleLine } from "react-icons/ri";

function PlayerTrack() {
  return (
    <div className="flex items-center gap-4">
      <img className="h-14 w-14 border-2" src="/test.png" alt="" />
      <div className="flex flex-col justify-end gap-0.5 leading-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Houdini
        </p>
        <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
          Dua lipa
        </p>
      </div>
      <RiAddCircleLine className="min-h-5 min-w-5 cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
    </div>
  );
}

export default PlayerTrack;
