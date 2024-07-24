import { useSelector } from "react-redux";
import useScrollbar from "../../../hooks/useScrollbar";
import Item from "../../../ui/Item";

function LibraryList() {
  const ref = useScrollbar();
  const { isMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div
      className={`${isPlayingTrackbarOpen && "md:justify-center md:pr-0"} scrollbar hide-scroll h-full overflow-auto pb-3 pl-3 pr-2`}
      ref={ref}
    >
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="artist"
        title="Halsey"
        subtitle="Artist"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
      <Item
        type="album"
        title="Found Heaven"
        subtitle="Album"
        size="small"
        nocontent={isMedium && isPlayingTrackbarOpen}
      />
    </div>
  );
}

export default LibraryList;
