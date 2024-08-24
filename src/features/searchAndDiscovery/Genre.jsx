import { useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { useSearchParams } from "react-router-dom";
import useMainContext from "../../ui/layout/useMainContext";

function Genre({ genre, isLoading }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { scrollMainToTop } = useMainContext();

  function handleOnClick() {
    searchParams.set("genre", genre?.name);
    setSearchParams(searchParams);
    scrollMainToTop();
  }

  return (
    <div
      onClick={handleOnClick}
      className="group relative flex min-h-36 cursor-pointer overflow-hidden rounded-md bg-white/50 px-4 py-4 shadow dark:bg-black/50"
    >
      {isLoading || !isImageLoaded ? (
        <>
          <Skeleton className="h-5 w-20" />
          <Skeleton className="absolute -bottom-5 -right-5 aspect-square h-24 w-24 rotate-[15deg] rounded-md shadow-md transition-all group-hover:scale-110 md:h-[7.5rem] md:w-[7.5rem]" />
        </>
      ) : (
        <>
          <p className="text-lg font-bold text-black first-letter:uppercase dark:text-white">
            {genre?.name}
          </p>
        </>
      )}
      <img
        src={!isLoading ? genre?.cover : ""}
        alt={genre?.name}
        onLoad={() => setIsImageLoaded(true)}
        className={`${!isImageLoaded && "hidden"} absolute -bottom-5 -right-5 aspect-square w-24 rotate-[15deg] rounded-md shadow-md transition-all group-hover:scale-110 md:w-[7.5rem]`}
      />
    </div>
  );
}

export default Genre;
