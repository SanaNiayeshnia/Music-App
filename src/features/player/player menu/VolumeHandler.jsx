import SliderBar from "../../../ui/SliderBar";
import { TbVolume } from "react-icons/tb";

function VolumeHandler() {
  return (
    <div className="flex items-center gap-2 md:w-20 lg:w-28">
      <TbVolume className="min-h-5 min-w-5 text-black duration-100 dark:text-white" />
      <SliderBar valueLabelDisplay="off" />
    </div>
  );
}

export default VolumeHandler;
