import { useDispatch } from "react-redux";
import { toggleQueueBar } from "../PlaybackSlice";
import { TbX } from "react-icons/tb";

function QueueBarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${isScrolled && "bg-white/70 shadow backdrop-blur-3xl dark:bg-black/70"} flex items-center justify-between px-3 py-6`}
    >
      <p className="text-sm font-semibold text-black dark:text-white">Queue</p>
      <TbX
        onClick={() => dispatch(toggleQueueBar())}
        className="min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black"
      />
    </div>
  );
}

export default QueueBarHeader;
