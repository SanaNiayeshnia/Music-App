import useScrollbar from "../../../hooks/useScrollbar";
import Track from "../../tracks/Track";
import useQueue from "./useQueue";

function QueueList({ setIsScrolled }) {
  const ref = useScrollbar();
  // const { isLoading, queue } = useQueue();

  return (
    <div
      ref={ref}
      onScroll={(e) => setIsScrolled(e.target.scrollTop)}
      className="scrollbar hide-scroll h-[calc(100%-4.5rem)] space-y-10 overflow-auto pb-3 pl-3 pr-2"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Now playing
        </p>
        <table className="w-full">
          <tbody>
            <Track smallScreen />
          </tbody>
        </table>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Next from: Radical Optimism
        </p>
        <table className="w-full">
          <tbody>
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
            <Track smallScreen />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QueueList;
