import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsMainScrolled } from "../../GlobalSlice";
import useScrollbar from "../../hooks/useScrollbar";
import { MainContext } from "./useMainContext";

function Main() {
  const dispatch = useDispatch();
  const ref = useScrollbar();

  function scrollMainToTop() {
    if (ref.current) ref.current.scrollTop = 0;
  }

  return (
    <MainContext.Provider value={{ scrollMainToTop }}>
      <div className="relative w-full overflow-hidden rounded-lg bg-white/50 shadow-lg backdrop-blur-md dark:bg-black/50">
        <div
          ref={ref}
          className="scrollbar hide-scroll h-full overflow-auto px-5 pb-5 pt-[85px]"
          onScroll={(e) => {
            dispatch(setIsMainScrolled(e.target.scrollTop > 0));
          }}
        >
          <Outlet />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default Main;
