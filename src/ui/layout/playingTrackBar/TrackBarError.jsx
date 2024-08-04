import { TbMoodSad } from "react-icons/tb";

function TrackBarError() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-2 text-sm">
      <p className="flex items-center gap-1 font-medium text-black dark:text-white">
        Unable to load the queue
        <TbMoodSad className="h-5 w-5 text-black duration-100 dark:text-white" />
      </p>
      <p className="font-medium text-black dark:text-white">
        Start by playing a song.
      </p>
    </div>
  );
}

export default TrackBarError;
