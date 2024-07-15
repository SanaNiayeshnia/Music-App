import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsMainScrolled } from "../../GlobalSlice";

function Main() {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full overflow-hidden rounded-md bg-white shadow-md dark:bg-glass-100">
      <div
        className="scrollbar h-full overflow-auto"
        onScroll={(e) => {
          dispatch(setIsMainScrolled(e.target.scrollTop > 260));
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
