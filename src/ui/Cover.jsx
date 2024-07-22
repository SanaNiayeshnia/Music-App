import { useSelector } from "react-redux";
import GramophoneDisc from "./GramophoneDisc";

function Cover({ image, title, className }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <div
      className={`${className} relative md:h-36 md:w-36 xl:h-40 xl:w-40 ${isPlayingTrackbarOpen ? "md:h-32 md:w-32 lg:h-36 lg:w-36" : "mr-[40px] lg:mr-[75px] lg:h-40 lg:w-40"}`}
    >
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 z-20 h-full w-full rounded shadow-[5px_3px_8px_0_#262626]`}
      />
      <div
        className={` ${isPlayingTrackbarOpen ? "left-0" : "left-20 md:left-14 lg:left-20"} absolute top-0 z-10 grid h-full w-full place-items-center p-1`}
      >
        <GramophoneDisc image={image} title={title} />
      </div>
    </div>
  );
}

export default Cover;
