import { useState } from "react";
import FloatingPlayButton from "../../ui/FloatingPlayButton";
import Title from "../../ui/Title";
import { useSearchParams } from "react-router-dom";
import Skeleton from "../../ui/Skeleton";

function TopResult({ item, isLoading = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const images = item?.type === "track" ? item?.album?.images : item?.images;
  const byWho =
    item?.type === "playlist"
      ? item?.owner?.display_name
      : item?.type === "artist"
        ? ""
        : item?.artists[0]?.name;

  return (
    <div className="min-w-96">
      <Title>Top Result</Title>
      <div
        className="group flex min-h-[232px] cursor-pointer flex-col justify-center gap-3 rounded-md bg-white/40 p-5 shadow hover:bg-white/50 dark:bg-black/40 dark:hover:bg-black/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isLoading ? (
          <Skeleton className="h-28 w-28 rounded-md shadow-md" />
        ) : (
          <img
            src={images[0]?.url || "/test.png"}
            alt={item?.name}
            className="h-28 w-28 rounded-md shadow-md"
          />
        )}

        <div className="relative">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-3 w-20" />
            </div>
          ) : (
            <>
              <p className="text-3xl font-bold text-black dark:text-white">
                {item?.name}
              </p>

              <div>
                <span className="font-medium text-gray-600 first-letter:uppercase dark:text-gray-300">
                  {item?.type !== "artist" ? item?.type + " • " : item?.type}
                </span>
                <span className="text-sm font-medium text-black dark:text-white">
                  {byWho}
                </span>
              </div>
            </>
          )}

          <FloatingPlayButton isHovered={isHovered} />
        </div>
      </div>
    </div>
  );
}

export default TopResult;
