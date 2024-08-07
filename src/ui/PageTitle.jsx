import { useSelector } from "react-redux";

function PageTitle({ children }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <p
      className={`${isPlayingTrackbarOpen ? "lg:text-2xl" : "lg:text-3xl"} text-2xl font-bold text-black xl:text-4xl 2xl:text-5xl dark:text-white`}
    >
      {children}
    </p>
  );
}

export default PageTitle;
