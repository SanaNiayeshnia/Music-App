import { HiMiniPlay, HiPlay } from "react-icons/hi2";
import { TbPlayerPlayFilled } from "react-icons/tb";

function PlayButton({ className }) {
  return (
    <div
      className={`${className} min-h-10 min-w-10 rounded-full bg-blue-600 p-2 shadow-md hover:scale-105`}
    >
      <TbPlayerPlayFilled
        className={`h-full w-full cursor-pointer text-white transition-all duration-100`}
      />
    </div>
  );
}

export default PlayButton;
