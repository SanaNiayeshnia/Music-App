import { useEffect, useState } from "react";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
import SliderBar from "../../../ui/SliderBar";
import { TbVolume } from "react-icons/tb";

function VolumeHandler() {
  const { player } = usePlayerContext();
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (!player.getVolume) return;
    player.getVolume().then((v) => setVolume(v));
  }, [player]);

  function onChangeVolume(value) {
    player.setVolume(value);
  }

  return (
    <div className="flex w-28 items-center gap-2">
      <TbVolume className="min-h-5 min-w-5 text-black duration-100 dark:text-white" />
      <SliderBar
        valueLabelDisplay="off"
        onChange={(value) => setVolume(value)}
        onChangeCommitted={onChangeVolume}
        max={1}
        value={volume}
        step={0.05}
      />
    </div>
  );
}

export default VolumeHandler;
