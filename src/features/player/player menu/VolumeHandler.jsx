import { RiVolumeUpLine } from "react-icons/ri";
import SliderBar from "../../../ui/SliderBar";

function VolumeHandler() {
  return (
    <div className="flex w-28 items-center gap-2">
      <RiVolumeUpLine className="min-h-5 min-w-5" />
      <SliderBar valueLabelDisplay="off" />
    </div>
  );
}

export default VolumeHandler;
