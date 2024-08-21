import { Outlet } from "react-router-dom";
import useScrollbar from "../../hooks/useScrollbar";
import useMainContext from "./useMainContext";
import { useEffect } from "react";

function Main() {
  const ref = useScrollbar();
  const { setMainRef, setIsMainScrolled } = useMainContext();
  useEffect(() => setMainRef(ref), [ref, setMainRef]);

  return (
    <div className="relative h-screen w-full rounded-lg bg-white/50 shadow-lg backdrop-blur-md md:h-auto lg:min-w-[425px] dark:bg-black/50">
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto pb-5 pl-3 pr-2 pt-[85px] md:px-5"
        onScroll={(e) => {
          setIsMainScrolled(e.target.scrollTop > 0);
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
