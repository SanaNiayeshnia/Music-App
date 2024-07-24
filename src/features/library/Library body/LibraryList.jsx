import { useSelector } from "react-redux";
import useScrollbar from "../../../hooks/useScrollbar";
import Item from "../../../ui/Item";
import useFollowedArtists from "../../artists/useFollowedArtists";

function LibraryList() {
  const ref = useScrollbar();
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isLoading, followedArtists } = useFollowedArtists();
  return (
    <div
      className={`${isPlayingTrackbarOpen && "md:justify-center"} scrollbar hide-scroll h-full overflow-auto pb-3 pl-3 pr-2`}
      ref={ref}
    >
      {isLoading
        ? Array.from({ length: 6 }).map(() => {
            return <Item key={Math.random()} isLoading={true} size="small" />;
          })
        : followedArtists?.map((artist) => (
            <Item key={artist.id} item={artist} size="small" />
          ))}
    </div>
  );
}

export default LibraryList;
