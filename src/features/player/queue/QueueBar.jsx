import { useSelector } from "react-redux";
import QueueBarHeader from "./QueueBarHeader";
import QueueList from "./QueueList";
import { useState } from "react";

function QueueBar() {
  const { isQueueBarOpen } = useSelector((store) => store.playback);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div
      className={`${isQueueBarOpen ? "animation-open-queuebar visible inset-0" : "animation-close-queuebar invisible top-full"} animation-open-queuebar absolute rounded-md bg-blue-100 shadow dark:bg-blue-950`}
    >
      <QueueBarHeader isScrolled={isScrolled} />
      <QueueList setIsScrolled={setIsScrolled} />
    </div>
  );
}

export default QueueBar;
