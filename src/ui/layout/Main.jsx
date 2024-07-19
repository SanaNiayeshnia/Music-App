import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsMainScrolled } from "../../GlobalSlice";

function Main() {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full overflow-hidden rounded-md bg-white/40 shadow-lg backdrop-blur-md dark:bg-black/40">
      <div
        className="scrollbar h-full overflow-auto"
        onScroll={(e) => {
          dispatch(setIsMainScrolled(e.target.scrollTop > 0));
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
