import { useSelector } from "react-redux";
import GramophoneDisc from "./GramophoneDisc";
import { useState } from "react";
import Skeleton from "./Skeleton";

function Cover({ image, title, className }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <div
      className={`${className} relative md:h-36 md:w-36 xl:h-40 xl:w-40 ${isPlayingTrackbarOpen ? "md:h-32 md:w-32 lg:h-36 lg:w-36" : "mr-[40px] lg:mr-[75px] lg:h-40 lg:w-40"}`}
    >
      {!isImgLoaded && (
        <Skeleton className="absolute inset-0 z-20 h-full w-full animate-none rounded shadow-[5px_3px_8px_0_#262626]" />
      )}
      <img
        src={image}
        alt={title}
        onLoad={() => setIsImgLoaded(true)}
        className={`${isImgLoaded ? "inline-block" : "hidden"} absolute inset-0 z-20 h-full w-full rounded shadow-[5px_3px_8px_0_#262626]`}
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
