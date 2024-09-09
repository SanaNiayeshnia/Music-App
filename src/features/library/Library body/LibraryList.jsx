import { useSelector } from "react-redux";
import useScrollbar from "../../../hooks/useScrollbar";
import Item from "../../../ui/Item";
import useFollowedItems from "../hooks/useFollowedItems";
import useLibraryContext from "../hooks/useLibraryContext";
import { useEffect } from "react";
import NothingFound from "../../../ui/NothingFound";

function LibraryList() {
  const ref = useScrollbar();
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isSmall } = useSelector((store) => store.global);
  const { isLoading, filteredItems } = useFollowedItems();
  const { setLibraryRef } = useLibraryContext();
  useEffect(() => {
    setLibraryRef(ref);
  }, [ref, setLibraryRef]);
  return (
    <div
      className={`${isPlayingTrackbarOpen && "md:justify-center"} scrollbar hide-scroll h-full overflow-auto pb-3 md:pl-3 md:pr-2`}
      ref={ref}
    >
      {isLoading ? (
        Array.from({ length: isSmall ? 8 : 6 }).map(() => {
          return <Item key={Math.random()} isLoading={true} size="small" />;
        })
      ) : !isLoading && filteredItems?.length > 0 ? (
        filteredItems?.map((item) => (
          <Item key={item.id} item={item} size="small" />
        ))
      ) : (
        <div className="px-2">
          <NothingFound />
        </div>
      )}
    </div>
  );
}

export default LibraryList;
