import Library from "../../features/library/Library";
import Player from "../../features/player/Player";
import PlayingTrackBar from "./playingTrackBar/PlayingTrackBar";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsMedium, setIsSmall } from "../../GlobalSlice";
import MainContextProvider from "./main/MainContextProvider";
import BottomNav from "./bottomNav/BottomNav";
import FullScreenPlayingTrack from "../../features/player/FullScreenPlayingTrack";
import { togglePlayingTrackBar } from "../../features/player/PlaybackSlice";
import { useLocation, useNavigate } from "react-router-dom";

function AppLayout() {
  const { isPlayingTrackbarOpen, isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );
  const { isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  const loc = useLocation();
  const isOnLibraryPage = loc.pathname.includes("/library");
  const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      dispatch(
        setIsMedium(window.innerWidth < 1024 && window.innerWidth > 768),
      );
      dispatch(setIsSmall(window.innerWidth < 768));
      window.innerWidth < 768 &&
        isPlayingTrackbarOpen &&
        dispatch(togglePlayingTrackBar());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, isPlayingTrackbarOpen]);

  // useEffect(() => {
  //   //redirect to main page if the user trys to access to the library page and they are not using a small screen device
  //   !isSmall && isOnLibraryPage && navigate("/");
  // }, [isSmall, isOnLibraryPage, navigate]);

  return (
    <MainContextProvider>
      <div
        className={`relative ${isPlayingTrackbarOpen ? "md:grid-cols-[87px_auto]" : "md:grid-cols-[1.6fr_4fr]"} ${!isFullScreenPlayingTrackOpen && "md:min-w-[900px]"} h-screen min-h-[650px] grid-rows-[1fr_4fr_0.5fr] gap-2 overflow-hidden md:grid md:px-3 md:py-2 lg:grid-cols-[1.6fr_4fr] xl:grid-cols-[1.3fr_4fr]`}
      >
        <Sidebar />
        <Library />

        <div className="col-end-[-1] row-start-1 row-end-[-1] flex gap-2 md:col-start-2">
          <Main />
          {isPlayingTrackbarOpen && <PlayingTrackBar />}
        </div>

        <Player />
        <BottomNav />
        <FullScreenPlayingTrack />
      </div>
    </MainContextProvider>
  );
}

export default AppLayout;
