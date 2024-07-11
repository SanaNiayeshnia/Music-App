import { Outlet } from "react-router-dom";
import Library from "../../features/library/Library";
import Player from "../../features/player/Player";
import PlayingTrackBar from "./playingTrackBar/PlayingTrackBar";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[1fr_4fr_0.5fr] gap-2 bg-blue-50 px-3 py-2 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1.7fr_4fr_1.5fr] dark:bg-black">
      <Sidebar />
      <Library />
      <Main>
        <Outlet />
      </Main>
      <PlayingTrackBar />
      <Player />
    </div>
  );
}

export default AppLayout;
