import { Outlet } from "react-router-dom";
import useScrollbar from "../../hooks/useScrollbar";
import useMainContext from "./useMainContext";
import { useEffect } from "react";

function Main() {
  const ref = useScrollbar();
  const { setMainRef, setIsMainScrolled } = useMainContext();
  useEffect(() => setMainRef(ref), [ref, setMainRef]);

  return (
    <div className="relative w-full rounded-lg bg-white/50 shadow-lg backdrop-blur-md lg:min-w-[425px] dark:bg-black/50">
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto px-5 pb-5 pt-[85px]"
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
