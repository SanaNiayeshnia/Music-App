import { RiAddCircleLine } from "react-icons/ri";

function PlayingTrack() {
  return (
    <div className="space-y-3">
      <img src="/test.png" alt="" className="w-full rounded-md" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0 leading-4">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            Houdini
          </p>
          <p className="text-gray-600 dark:text-gray-300">Dua lipa</p>
        </div>
        <RiAddCircleLine className="min-h-5 min-w-5 cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
      </div>
    </div>
  );
}

export default PlayingTrack;
