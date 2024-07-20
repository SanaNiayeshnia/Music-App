import { RiVolumeUpLine } from "react-icons/ri";
import SliderBar from "../../../ui/SliderBar";

function VolumeHandler() {
  return (
    <div className="flex items-center gap-2 md:w-20 lg:w-28">
      <RiVolumeUpLine className="min-h-5 min-w-5 text-black duration-100 dark:text-white" />
      <SliderBar valueLabelDisplay="off" />
    </div>
  );
}

export default VolumeHandler;
