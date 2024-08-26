import { useState } from "react";
import FloatingPlayButton from "./FloatingPlayButton";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import { formatName } from "../utilities/helper";
import { useNavigate } from "react-router-dom";
import useMainContext from "./layout/Main/useMainContext";

function Item({ item = {}, size, isLoading = false, discography = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { name, type } = item;
  const artists = item?.artists || [];
  const images = type === "track" ? item?.album?.images : item?.images;
  const filteredName = formatName(name, 45);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { scrollMainToTop } = useMainContext();
  const { isDarkMode } = useSelector((store) => store.global);

  function handleOnClick() {
    navigate(`/${type}/${item?.id}`);
    scrollMainToTop();
  }

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !isLoading && handleOnClick()}
      className={`${size === "large" ? "flex-col p-3 md:w-full" : "items-center p-2"} ${!isLoading && "cursor-pointer"} group flex flex-shrink-0 gap-3 rounded-md hover:bg-white/40 hover:shadow dark:hover:bg-black/40`}
    >
      <div className={`${size === "large" && "relative"}`}>
        {(!isImageLoaded || isLoading) && (
          <Skeleton
            className={`rounded shadow ${type === "artist" ? "rounded-full" : "rounded"} ${size === "large" ? `aspect-square h-full w-full` : "h-14 w-14 drop-shadow md:h-12 md:w-12 lg:h-14 lg:w-14"}`}
          />
        )}

        <img
          src={
            !isLoading
              ? images?.at(0)?.url ||
                (isDarkMode
                  ? "/images/covers/album-cover-dark.jpeg"
                  : "/images/covers/album-cover-light.jpeg")
              : ""
          }
          alt={name}
          onLoad={() => setIsImageLoaded(true)}
          className={`${!isImageLoaded && "hidden"} aspect-square shadow transition-all group-hover:scale-105 ${type === "artist" ? "rounded-full" : "rounded"} ${size === "large" ? "md:h-full md:w-full" : "h-14 w-14 drop-shadow md:h-12 md:w-12 lg:h-14 lg:w-14"}`}
        />

        {size === "large" && !isLoading && (
          <FloatingPlayButton isHovered={isHovered} />
        )}
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
            {discography ? (
              <p className="text-gray-600 first-letter:uppercase dark:text-gray-300">
                {item?.release_date?.slice(0, 4)} • {item?.album_type}
              </p>
            ) : (
              <p className="text-gray-600 first-letter:uppercase dark:text-gray-300">
                {size === "large" && (type === "track" || type === "album") ? (
                  artists?.map((artist, index) => (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/artist/${artist?.id}`);
                      }}
                      className="hover:underline"
                      key={artist?.id}
                    >
                      {artist.name}
                      {artists.length > 1 && index < artists.length - 1 && ", "}
                    </span>
                  ))
                ) : size === "large" && type === "playlist" ? (
                  item?.owner?.display_name
                ) : (
                  <>
                    {type}
                    {type === "playlist" ? (
                      " • " + item?.owner?.display_name
                    ) : type === "album" ? (
                      <>
                        {" "}
                        •{" "}
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() => navigate(`/artist/${artists[0]?.id}`)}
                        >
                          {artists[0]?.name}
                        </span>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </p>
            )}
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
