import { useSelector } from "react-redux";
import Genre from "./Genre";
import Title from "../../ui/Title";
import useAvailableGenres from "./hooks/useAvailableGenres";

function GenreList() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isLoading, availableGenres } = useAvailableGenres();
  return (
    <div>
      <Title>Browse all</Title>
      <div
        className={`grid-cols-2 ${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} mt-5 grid grid-rows-1 items-center gap-5 overflow-hidden`}
      >
        {isLoading
          ? Array.from({ length: 12 }).map((genre, index) => (
              <Genre isLoading={true} key={index} />
            ))
          : availableGenres?.map((genre, index) => (
              <Genre genre={genre} key={index} />
            ))}
      </div>
    </div>
  );
}

export default GenreList;
