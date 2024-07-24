import Library from "../../features/library/Library";
import Player from "../../features/player/Player";
import PlayingTrackBar from "./playingTrackBar/PlayingTrackBar";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsMedium } from "../../GlobalSlice";

function AppLayout() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const dispatch = useDispatch();
  useEffect(() => {
    function handleResize() {
      dispatch(setIsMedium(window.innerWidth < 1024));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:grid-cols-[87px_auto]" : "md:grid-cols-[1.6fr_4fr]"} grid h-screen min-h-[635px] grid-rows-[1fr_4fr_0.5fr] gap-2 px-3 py-2 md:min-w-[900px] lg:grid-cols-[1.6fr_4fr] xl:grid-cols-[1.3fr_4fr]`}
    >
      <Sidebar />
      <Library />

      <div className="col-start-2 col-end-[-1] row-start-1 row-end-[-1] flex gap-2">
        <Main />
        {isPlayingTrackbarOpen && <PlayingTrackBar />}
      </div>

      <Player />
    </div>
  );
}

export default AppLayout;
