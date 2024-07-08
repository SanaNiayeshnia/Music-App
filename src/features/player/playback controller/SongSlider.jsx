import SliderBar from "../../../ui/SliderBar";

function SongSlider() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
      <span>0:15</span>
      <SliderBar thumbDisplay="off" valueLabelDisplay="off" />
      <span>3:49</span>
    </div>
  );
}

export default SongSlider;
