import { useSelector } from "react-redux";
import useScrollbar from "../../../hooks/useScrollbar";
import Item from "../../../ui/Item";

function LibraryList() {
  const ref = useScrollbar();
  const { isSmallMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div
      className={`${isSmallMedium && isPlayingTrackbarOpen && "justify-center"} scrollbar hide-scroll flex h-full flex-col overflow-auto px-2`}
      ref={ref}
    >
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isSmallMedium && isPlayingTrackbarOpen}
      />
    </div>
  );
}

export default LibraryList;
