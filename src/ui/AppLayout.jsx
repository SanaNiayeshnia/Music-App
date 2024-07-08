import { Outlet } from "react-router-dom";
import Library from "../features/library/Library";
import Sidebar from "./sidebar/Sidebar";
import Player from "../features/player/Player";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="grid h-screen gap-2 bg-blue-50 px-3 py-2 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr] dark:bg-black">
      <div className="grid grid-cols-1 grid-rows-[1fr_5fr] gap-2">
        <Sidebar />
        <Library />
      </div>

      <Main>
        <Outlet />
      </Main>

      <Player />
    </div>
  );
}

export default AppLayout;
