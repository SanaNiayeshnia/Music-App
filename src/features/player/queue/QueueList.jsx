import { Link } from "react-router-dom";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
import useScrollbar from "../../../hooks/useScrollbar";
import Track from "../../tracks/Track";
import useQueue from "./useQueue";

function QueueList({ setIsScrolled }) {
  const ref = useScrollbar();
  const { isLoading, queue } = useQueue();
  const { playerState, currentTrack } = usePlayerContext();
  const contextSplittedArray = playerState?.context?.uri?.split(":");

  return (
    <div
      ref={ref}
      onScroll={(e) => setIsScrolled(e.target.scrollTop)}
      className="scrollbar hide-scroll flex-grow space-y-10 overflow-auto pb-3 pl-3 pr-2"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Now playing
        </p>
        <table className="w-full">
          <tbody>
            <Track
              smallScreen
              track={queue?.currently_playing}
              isLoading={isLoading}
            />
          </tbody>
        </table>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Next from:{" "}
          <Link
            className="overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 hover:text-blue-600"
            to={
              contextSplittedArray?.[1]
                ? `/${contextSplittedArray?.[1]}/${contextSplittedArray?.[2]}`
                : `/track/${currentTrack?.id}`
            }
          >
            {playerState?.context?.metadata?.context_description ||
              currentTrack?.name}
          </Link>
        </p>
        <table className="w-full">
          <tbody>
            {isLoading
              ? Array.from({ length: 10 }).map((item, index) => (
                  <Track smallScreen key={index} isLoading />
                ))
              : queue?.queue?.map((item, index) => (
                  <Track smallScreen key={index} track={item} />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QueueList;
