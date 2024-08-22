import { useSelector } from "react-redux";
import PlayButton from "./PlayButton";

function NavTitle({ children, noPlayButton }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div className="flex items-center gap-2 px-2">
      {!noPlayButton && <PlayButton />}

      <p
        className={`${isPlayingTrackbarOpen ? "text-base lg:text-lg xl:text-xl" : "text-lg lg:text-xl xl:text-2xl"} flex items-center gap-2 font-bold text-black first-letter:uppercase dark:text-white`}
      >
        {children}
      </p>
    </div>
  );
}

export default NavTitle;
