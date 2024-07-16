import Library from "../../features/library/Library";
import Player from "../../features/player/Player";
import PlayingTrackBar from "./playingTrackBar/PlayingTrackBar";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsSmallMedium } from "../../GlobalSlice";

function AppLayout() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isSmallMedium } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  useEffect(() => {
    function handleResize() {
      dispatch(setIsSmallMedium(window.innerWidth < 1024));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div
      className={`${isPlayingTrackbarOpen && isSmallMedium ? "md:grid-cols-[87px_auto]" : "md:grid-cols-[1.6fr_4fr]"} grid h-screen min-h-[635px] grid-rows-[1fr_4fr_0.5fr] gap-2 bg-blue-100 px-3 py-2 lg:grid-cols-[1.6fr_4fr] xl:grid-cols-[1.3fr_4fr] dark:bg-black`}
    >
      <Sidebar />
      <Library />

      <div className="col-start-2 col-end-[-1] row-start-1 row-end-[-1] flex gap-2 overflow-auto">
        <Main />
        {isPlayingTrackbarOpen && <PlayingTrackBar />}
      </div>

      <Player />
    </div>
  );
}

export default AppLayout;
