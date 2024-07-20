import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleQueueBar } from "../PlaybackSlice";

function QueueBarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${isScrolled && "bg-white/80 shadow backdrop-blur-3xl dark:bg-black/80"} flex items-center justify-between px-3 py-[1.4rem]`}
    >
      <p className="text-sm font-semibold text-black dark:text-white">Queue</p>
      <RiCloseFill
        onClick={() => dispatch(toggleQueueBar())}
        className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black"
      />
    </div>
  );
}

export default QueueBarHeader;
