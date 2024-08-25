import { useSelector } from "react-redux";
import GramophoneDisc from "./GramophoneDisc";
import { useState } from "react";
import Skeleton from "./Skeleton";

function Cover({ cover, title, className }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <div
      className={`${className ? className : `h-48 w-48 flex-shrink-0 xl:h-48 xl:w-48 ${isPlayingTrackbarOpen ? "md:h-32 md:w-32 lg:h-40 lg:w-40" : "mr-[40px] md:h-36 md:w-36 lg:mr-[75px] lg:h-44 lg:w-44"}`} relative`}
    >
      {!isImgLoaded && (
        <Skeleton className="absolute inset-0 z-20 h-full w-full animate-none rounded" />
      )}
      <img
        src={cover || `/album-cover-${isDarkMode ? "dark" : "light"}.jpeg`}
        alt={title}
        onLoad={() => setIsImgLoaded(true)}
        className={`${!isImgLoaded && "hidden"} absolute inset-0 z-20 h-full w-full rounded shadow-[5px_3px_8px_0_black]`}
      />
      <div
        className={` ${isPlayingTrackbarOpen ? "left-0" : "left-20 md:left-14 lg:left-20"} absolute top-0 z-10 grid h-full w-full place-items-center p-1`}
      >
        <GramophoneDisc image={cover} title={title} />
      </div>
    </div>
  );
}

export default Cover;
