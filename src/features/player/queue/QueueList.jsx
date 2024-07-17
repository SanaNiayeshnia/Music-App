import useScrollbar from "../../../hooks/useScrollbar";
import PlayerTrack from "../PlayerTrack";

function QueueList() {
  const ref = useScrollbar();

  return (
    <div
      ref={ref}
      className="scrollbar hide-scroll h-[calc(100%-6rem)] space-y-10 overflow-auto px-2"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Now playing
        </p>
        <PlayerTrack hoverable />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Now playing
        </p>
        <div className="">
          <PlayerTrack hoverable />
          <PlayerTrack hoverable />
          <PlayerTrack hoverable />
          <PlayerTrack hoverable />
          <PlayerTrack hoverable /> <PlayerTrack hoverable />{" "}
          <PlayerTrack hoverable /> <PlayerTrack hoverable />
          <PlayerTrack hoverable /> <PlayerTrack hoverable />{" "}
          <PlayerTrack hoverable />
        </div>
      </div>
    </div>
  );
}

export default QueueList;
