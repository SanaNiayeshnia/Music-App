import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsMainScrolled } from "../../GlobalSlice";
import useScrollbar from "../../hooks/useScrollbar";

function Main() {
  const dispatch = useDispatch();
  const ref = useScrollbar();

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white/50 shadow-lg backdrop-blur-md dark:bg-black/50">
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto"
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
