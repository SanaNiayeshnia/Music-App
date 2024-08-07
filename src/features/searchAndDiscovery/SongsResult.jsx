import Title from "../../ui/Title";
import useMainContext from "../../ui/layout/useMainContext";
import Track from "../tracks/Track";

function SongsResult({ items, isLoading, all, setCurrentFilterArray }) {
  const { scrollMainToTop } = useMainContext();

  function handleShowAll() {
    setCurrentFilterArray([items[0]?.type]);
    scrollMainToTop();
  }
  return (
    <div key={all} className="min-w-96 flex-grow">
      <div className="flex items-center justify-between">
        <Title>Songs</Title>

        {!all && items?.length > 4 && (
          <p
            className="mt-5 cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={handleShowAll}
          >
            Show all
          </p>
        )}
      </div>
      <table className="w-full">
        <tbody>
          {isLoading
            ? Array.from({ length: 4 }).map((item, index) => (
                <Track key={index} isLoading={isLoading} index={index + 1} />
              ))
            : items
                ?.slice(0, all ? items?.length : 4)
                .map((item, index) => (
                  <Track
                    isLoading={isLoading}
                    track={item}
                    index={index + 1}
                    key={item.id}
                    noAlbum
                  />
                ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongsResult;
