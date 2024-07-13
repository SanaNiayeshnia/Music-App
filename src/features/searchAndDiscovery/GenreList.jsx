import { useSelector } from "react-redux";
import Genre from "./Genre";

function GenreList() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} grid grid-rows-1 items-center gap-6 overflow-hidden`}
    >
      <Genre />
      <Genre />
      <Genre />
      <Genre />
      <Genre />
      <Genre />
      <Genre />
    </div>
  );
}

export default GenreList;
