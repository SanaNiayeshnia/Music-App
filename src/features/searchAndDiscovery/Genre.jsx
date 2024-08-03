import Skeleton from "../../ui/Skeleton";

function Genre({ genre, isLoading }) {
  return (
    <div className="group relative flex min-h-36 cursor-pointer overflow-hidden rounded-md bg-white/50 px-4 py-4 shadow dark:bg-black/50">
      {isLoading ? (
        <>
          <Skeleton className="h-5 w-20" />
          <Skeleton className="absolute -bottom-5 -right-5 aspect-square h-[7.5rem] w-[7.5rem] rotate-[15deg] rounded-md shadow-md transition-all group-hover:scale-110" />
        </>
      ) : (
        <>
          <p className="text-lg font-bold text-black dark:text-white">
            {genre?.name}
          </p>
          <img
            src={genre?.cover || "/test.png"}
            alt={genre?.name}
            className="absolute -bottom-5 -right-5 aspect-square w-[7.5rem] rotate-[15deg] rounded-md shadow-md transition-all group-hover:scale-110"
          />
        </>
      )}
    </div>
  );
}

export default Genre;
