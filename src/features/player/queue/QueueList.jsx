import { Link } from "react-router-dom";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
import useScrollbar from "../../../hooks/useScrollbar";
import Track from "../../tracks/Track";
import useQueue from "./useQueue";
import { Skeleton } from "@mui/material";
import NothingFound from "../../../ui/NothingFound";

function QueueList({ setIsScrolled }) {
  const ref = useScrollbar();
  const { isLoading, queue } = useQueue();
  const { playerState, currentTrack } = usePlayerContext();
  const contextSplittedArray = playerState?.context?.uri?.split(":");

  return (
    <div
      ref={ref}
      onScroll={(e) => setIsScrolled(e.target.scrollTop)}
      className="scrollbar hide-scroll max-h-[calc(100%-5rem)] flex-grow space-y-10 overflow-auto pb-3 pl-3 pr-2"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Now playing
        </p>
        <table className="w-full">
          <tbody>
            <Track
              smallScreen
              track={{
                ...currentTrack,
                artists: currentTrack?.artists?.map((artist) => ({
                  ...artist,
                  id: artist?.uri?.split(":")?.[2],
                })),
              }}
              isLoading={isLoading}
            />
          </tbody>
        </table>
      </div>
      <div className="space-y-2">
        <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
          Next from:{" "}
          {playerState?.loading ? (
            <Skeleton variant="text" width="100px" />
          ) : (
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
          )}
        </p>
        {!isLoading && queue?.queue?.length === 0 && <NothingFound />}
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
