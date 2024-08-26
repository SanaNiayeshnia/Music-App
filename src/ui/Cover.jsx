import { useSelector } from "react-redux";
import GramophoneDisc from "./GramophoneDisc";
import { useState } from "react";
import Skeleton from "./Skeleton";

function Cover({ cover, title, size = "medium", className }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <div
      className={`${className} ${size === "medium" && `h-48 w-48 xl:h-48 xl:w-48 ${isPlayingTrackbarOpen ? "md:h-32 md:w-32 lg:h-40 lg:w-40" : "mr-16 md:mr-12 md:h-36 md:w-36 lg:mr-20 lg:h-44 lg:w-44"}`} ${size === "large" && "mr-[4.5rem] h-52 w-52 md:mr-20 md:h-64 md:w-64 lg:mr-24 lg:h-72 lg:w-72"} relative flex-shrink-0`}
    >
      {!isImgLoaded && (
        <Skeleton className="absolute inset-0 z-20 h-full w-full animate-none rounded" />
      )}
      <img
        src={
          cover ||
          `/images/covers/album-cover-${isDarkMode ? "dark" : "light"}.jpeg`
        }
        alt={title}
        onLoad={() => setIsImgLoaded(true)}
        className={`${!isImgLoaded && "hidden"} absolute inset-0 z-20 h-full w-full rounded shadow-[5px_3px_8px_0_black]`}
      />
      <div
        className={` ${isPlayingTrackbarOpen && size === "medium" ? "left-0" : "left-20 md:left-14 lg:left-20"} ${size === "large" && "left-20 md:left-24 lg:left-28"} absolute top-0 z-10 grid h-full w-full place-items-center p-1`}
      >
        <GramophoneDisc image={cover} title={title} />
      </div>
    </div>
  );
}

export default Cover;
