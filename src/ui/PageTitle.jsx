import { useSelector } from "react-redux";

function PageTitle({ children }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <p
      className={`${isPlayingTrackbarOpen ? "lg:text-[2.5rem]" : "lg:text-5xl"} text-4xl font-bold text-gray-900 xl:text-6xl 2xl:text-7xl dark:text-white`}
    >
      {children}
    </p>
  );
}

export default PageTitle;
