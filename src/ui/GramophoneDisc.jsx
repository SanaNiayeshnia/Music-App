import { useState } from "react";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";

function GramophoneDisc({ image, title, className }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <div
      className={`${className} grid h-full w-full place-items-center rounded-full bg-black`}
    >
      <div className="grid h-5/6 w-5/6 place-items-center rounded-full border-r border-white/50">
        <div className="grid h-5/6 w-5/6 place-items-center rounded-full border-r border-white/60">
          <div className="h-5/6 w-5/6 rounded-full border-r border-white/50">
            {!isImgLoaded && (
              <Skeleton className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow" />
            )}
            <img
              src={
                image || `/album-cover-${isDarkMode ? "dark" : "light"}.jpeg`
              }
              alt={title}
              onLoad={() => setIsImgLoaded(true)}
              className={`${isImgLoaded ? "inline-block" : "hidden"} absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full`}
            />
            <div className="absolute left-1/2 top-1/2 h-[10%] w-[10%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GramophoneDisc;
