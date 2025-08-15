import { useSelector } from "react-redux";
import QueueBarHeader from "./QueueBarHeader";
import QueueList from "./QueueList";
import { useState } from "react";

function QueueBar() {
  const { isQueueBarOpen } = useSelector((store) => store.playback);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div
      className={`${isQueueBarOpen ? "translate-y-0" : "translate-y-full"} absolute inset-0 bg-blue-100 shadow transition-all duration-300 dark:bg-blue-950`}
    >
      <QueueBarHeader isScrolled={isScrolled} />
      <QueueList setIsScrolled={setIsScrolled} />
    </div>
  );
}

export default QueueBar;
