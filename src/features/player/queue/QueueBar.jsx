import { useSelector } from "react-redux";
import QueueBarHeader from "./QueueBarHeader";
import QueueList from "./QueueList";

function QueueBar() {
  const { isQueueBarOpen } = useSelector((store) => store.playback);
  return (
    <div
      className={`${isQueueBarOpen ? "animation-open-queuebar inset-0" : "animation-close-queuebar"} animation-open-queuebar absolute space-y-6 rounded-md bg-white px-2 dark:bg-[#1A1A1A]`}
    >
      <QueueBarHeader />
      <QueueList />
    </div>
  );
}

export default QueueBar;
