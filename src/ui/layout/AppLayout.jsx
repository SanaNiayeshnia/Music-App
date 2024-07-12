import { Outlet } from "react-router-dom";
import Library from "../../features/library/Library";
import Player from "../../features/player/Player";
import PlayingTrackBar from "./playingTrackBar/PlayingTrackBar";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";
import { useSelector } from "react-redux";

function AppLayout() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div className="grid h-screen grid-rows-[1fr_4fr_0.5fr] gap-2 bg-blue-100 px-3 py-2 lg:grid-cols-[1.6fr_4fr] xl:grid-cols-[1.3fr_4fr] dark:bg-black">
      <Sidebar />
      <Library />

      <div className="col-start-2 col-end-[-1] row-start-1 row-end-3 flex gap-2">
        <Main>
          <Outlet />
        </Main>

        {isPlayingTrackbarOpen && <PlayingTrackBar />}
      </div>

      <Player />
    </div>
  );
}

export default AppLayout;
