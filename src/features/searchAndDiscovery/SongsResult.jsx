import Title from "../../ui/Title";
import useMainContext from "../../ui/layout/Main/useMainContext";
import TrackList from "../tracks/TrackList";

function SongsResult({ items, all, setCurrentFilter }) {
  const { scrollMainToTop } = useMainContext();

  function handleShowAll() {
    setCurrentFilter(items[0]?.type);
    scrollMainToTop();
  }

  return (
    <div
      key={all}
      className={`${!all && "mt-8"} min-w-80 flex-grow md:min-w-96`}
    >
      <div className="mb-3 flex items-center justify-between">
        <Title>Songs</Title>

        {!all && items?.length > 4 && (
          <p
            className="cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
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
