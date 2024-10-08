import { useEffect, useState } from "react";
import FloatingPlayButton from "../../ui/FloatingPlayButton";
import Title from "../../ui/Title";
import Skeleton from "../../ui/Skeleton";
import { useNavigate } from "react-router-dom";

function TopResult({ item, isLoading }) {
  const [isHovered, setIsHovered] = useState(false);
  const images = item?.type === "track" ? item?.album?.images : item?.images;
  const byWho =
    item?.type === "playlist"
      ? item?.owner?.display_name
      : item?.type === "artist"
        ? ""
        : item?.artists[0]?.name;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //if the query changed, set the isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [item]);

  return (
    <div
      className="min-w-80 md:min-w-96"
      onClick={() => navigate(`/${item?.type}/${item?.id}`)}
    >
      <Title>Top Result</Title>
      <div
        className="group mt-3 flex min-h-[232px] cursor-pointer flex-col justify-center gap-3 rounded-md bg-white/40 p-5 shadow hover:bg-white/50 dark:bg-black/40 dark:hover:bg-black/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(!isImageLoaded || isLoading) && (
          <Skeleton className="h-28 w-28 rounded-md shadow-md" />
        )}

        <img
          src={!isLoading ? images[0]?.url : ""}
          alt={item?.name}
          className={`${!isImageLoaded ? "hidden" : ""} h-28 w-28 rounded-md shadow-md`}
          onLoad={() => setIsImageLoaded(true)}
        />

        <div className="relative">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-5 w-40 rounded-sm" />
              <Skeleton className="h-3 w-20 rounded-sm" />
            </div>
          ) : (
            <>
              <p className="max-w-96 text-3xl font-bold text-black dark:text-white">
                {item?.name}
              </p>

              <div className="first-letter:uppercase">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {item?.type !== "artist" ? item?.type + " • " : item?.type}
                </span>
                <span className="text-sm font-medium text-black dark:text-white">
                  {byWho}
                </span>
              </div>
            </>
          )}

          {!isLoading && <FloatingPlayButton isHovered={isHovered} />}
        </div>
      </div>
    </div>
  );
}

export default TopResult;
