import { useState } from "react";
import Skeleton from "../../ui/Skeleton";
import useMainContext from "../../ui/layout/Main/useMainContext";
import { useNavigate } from "react-router-dom";

function Category({ category, isLoading }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { scrollMainToTop } = useMainContext();
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(`/category/${category?.id}`);
    scrollMainToTop();
  }

  return (
    <div
      onClick={handleOnClick}
      className="group relative flex min-h-36 cursor-pointer overflow-hidden rounded-md bg-white/50 px-4 py-4 shadow dark:bg-black/50"
    >
      {isLoading ? (
        <Skeleton className="h-5 w-20" />
      ) : (
        <p className="text-lg font-bold text-black first-letter:uppercase dark:text-white">
          {category?.name}
        </p>
      )}

      {!isImageLoaded && (
        <Skeleton className="absolute -bottom-5 -right-5 aspect-square h-24 w-24 rotate-[15deg] rounded-md shadow-md transition-all group-hover:scale-110 md:h-[7.5rem] md:w-[7.5rem]" />
      )}
      <img
        src={!isLoading ? category?.icons[0]?.url : ""}
        alt={category?.name}
        onLoad={() => setIsImageLoaded(true)}
        className={`${!isImageLoaded && "hidden"} absolute -bottom-5 -right-5 aspect-square w-24 rotate-[15deg] rounded-md shadow-md transition-all group-hover:scale-110 md:w-[7.5rem]`}
      />
    </div>
  );
}

export default Category;
