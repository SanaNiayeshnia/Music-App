import { Outlet } from "react-router-dom";
import useScrollbar from "../../hooks/useScrollbar";
import { useDispatch } from "react-redux";
import { setIsMainScrolled } from "../../GlobalSlice";

function Main() {
  const ref = useScrollbar();
  const dispatch = useDispatch();

  return (
    <div className="relative w-full overflow-hidden rounded-md bg-white pb-5 shadow-md dark:bg-glass-100">
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto"
        onScroll={(e) => {
          dispatch(setIsMainScrolled(e.target.scrollTop > 250));
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
