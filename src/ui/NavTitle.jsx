import { useSelector } from "react-redux";
import PlayButton from "./PlayButton";

function NavTitle({ children }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div className="flex items-center gap-2 px-2">
      <PlayButton />
      <p
        className={`${isPlayingTrackbarOpen ? "text-base lg:text-lg xl:text-xl" : "text-lg lg:text-xl xl:text-2xl"} font-semibold text-black dark:text-white`}
      >
        {children}
      </p>
    </div>
  );
}

export default NavTitle;
