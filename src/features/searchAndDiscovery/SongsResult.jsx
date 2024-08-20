import Title from "../../ui/Title";
import useMainContext from "../../ui/layout/useMainContext";
import TrackList from "../tracks/TrackList";

function SongsResult({ items, all, setCurrentFilterArray }) {
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
      <TrackList all={all} items={items} noAlbum />
    </div>
  );
}

export default SongsResult;
