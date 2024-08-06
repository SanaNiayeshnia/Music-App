import Title from "../../ui/Title";
import Track from "../tracks/Track";

function SongsResult({ items, isLoading, all, setCurrentFilterArray }) {
  return (
    <div key={all} className="min-w-96 flex-grow">
      <div className="flex items-center justify-between">
        <Title>Songs</Title>

        {!all && (
          <p
            className="mt-5 cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={() => setCurrentFilterArray([items[0]?.type])}
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
                    noArtist
                    noAlbum
                  />
                ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongsResult;
