import { useState } from "react";
import FloatingPlayButton from "./FloatingPlayButton";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

function Item({ item = {}, size, isLoading = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { name, type } = item;
  const artists = item?.artists || [];
  const images = type === "track" ? item?.album?.images : item?.images;
  const filteredName =
    name?.length > 25
      ? name
          ?.slice(0, 25)
          .split(" ")
          .slice(0, name?.slice(0, 20)?.split(" ")?.length - 1)
          .join(" ") + "..."
      : name; //if the name length was more than 25 char, cut it and add "..."

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${size === "large" ? "flex-col p-3" : "items-center p-2"} group flex cursor-pointer gap-3 rounded-md hover:bg-white/40 hover:shadow dark:hover:bg-black/40`}
    >
      <div className={`${size === "large" && "relative"}`}>
        {isLoading ? (
          <Skeleton
            className={`rounded shadow ${size === "large" ? `aspect-square h-full w-full` : "h-12 w-12 lg:h-14 lg:w-14"}`}
          />
        ) : (
          <img
            src={images[0]?.url}
            alt={name}
            className={`shadow transition-all group-hover:scale-105 ${type === "artist" ? "rounded-full" : "rounded"} ${size === "large" ? "w-full" : "max-h-12 min-h-12 min-w-12 max-w-12 lg:max-h-14 lg:min-h-14 lg:min-w-14 lg:max-w-14"}`}
          />
        )}

        {size === "large" && <FloatingPlayButton isHovered={isHovered} />}
      </div>

      <div
        className={`${isPlayingTrackbarOpen && size === "small" && "md:hidden"} flex-grow text-sm lg:inline-block`}
      >
        {isLoading ? (
          <div className="flex flex-col justify-center gap-1">
            <Skeleton
              className={`${size === "large" ? "h-3 w-24" : "h-2 w-16"} rounded-sm`}
            />
            <Skeleton
              className={`${size === "large" ? "h-3 w-12" : "h-2 w-10"} rounded-sm`}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-1">
            <p className="font-medium text-black dark:text-white">
              {filteredName}
            </p>
            <p className="text-gray-600 first-letter:uppercase dark:text-gray-300">
              {size === "large" && (type === "track" || type === "album")
                ? artists[0]?.name
                : type}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return isMedium && isPlayingTrackbarOpen && size === "small" ? (
    <Tooltip title={name} placement="right">
      {content}
    </Tooltip>
  ) : (
    content
  );
}

export default Item;
