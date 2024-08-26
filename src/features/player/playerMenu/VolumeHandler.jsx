import SliderBar from "../../../ui/SliderBar";
import { TbVolume } from "react-icons/tb";

function VolumeHandler() {
  return (
    <div className="flex w-28 items-center gap-2">
      <TbVolume className="min-h-5 min-w-5 text-black duration-100 dark:text-white" />
      <SliderBar valueLabelDisplay="off" />
    </div>
  );
}

export default VolumeHandler;
