import Library from "../../features/library/Library";
import Player from "../../features/player/Player";
import PlayingTrackBar from "./playingTrackBar/PlayingTrackBar";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsMedium, setIsSmall } from "../../GlobalSlice";
import MainContextProvider from "./MainContextProvider";

function AppLayout() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const dispatch = useDispatch();
  useEffect(() => {
    function handleResize() {
      dispatch(setIsMedium(window.innerWidth < 1024));
      dispatch(setIsSmall(window.innerWidth < 768));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <MainContextProvider>
      <div
        className={` ${isPlayingTrackbarOpen ? "md:grid-cols-[87px_auto]" : "md:grid-cols-[1.6fr_4fr]"} h-screen grid-rows-[1fr_4fr_0.5fr] gap-2 md:grid md:min-h-[635px] md:min-w-[900px] md:px-3 md:py-2 lg:grid-cols-[1.6fr_4fr] xl:grid-cols-[1.3fr_4fr]`}
      >
        <Sidebar />
        <Library />

        <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] flex gap-2 md:col-start-2">
          <Main />
          {isPlayingTrackbarOpen && <PlayingTrackBar />}
        </div>

        <Player />
      </div>
    </MainContextProvider>
  );
}

export default AppLayout;
