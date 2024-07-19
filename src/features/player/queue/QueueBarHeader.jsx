import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleQueueBar } from "../PlaybackSlice";

function QueueBarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${isScrolled && "shadow-sm"} flex items-center justify-between px-3 py-[1.4rem]`}
    >
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        Queue
      </p>
      <RiCloseFill
        onClick={() => dispatch(toggleQueueBar())}
        className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-gray-900 duration-100 hover:bg-blue-50 dark:text-white dark:hover:bg-glass-100"
      />
    </div>
  );
}

export default QueueBarHeader;
