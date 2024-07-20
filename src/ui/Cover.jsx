import { useSelector } from "react-redux";

function Cover({ src, alt }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <img
      src={src}
      alt={alt}
      className={`${isPlayingTrackbarOpen ? "md:h-32 md:w-32 lg:h-36 lg:w-36" : "lg:h-40 lg:w-40"} h-36 w-36 rounded shadow-md xl:h-40 xl:w-40`}
    />
  );
}

export default Cover;
