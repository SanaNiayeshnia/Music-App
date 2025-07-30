import { Outlet } from "react-router-dom";
import useScrollbar from "../../../hooks/useScrollbar";
import useMainContext from "./useMainContext";
import { useEffect } from "react";

function Main() {
  const ref = useScrollbar();
  const { setMainRef, setIsMainScrolled } = useMainContext();
  useEffect(() => setMainRef(ref), [ref, setMainRef]);

  return (
    <div
      className={`relative h-screen w-full overflow-hidden bg-white/50 shadow-lg backdrop-blur-md md:h-auto md:rounded-lg lg:min-w-[425px] dark:bg-black/50`}
    >
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto px-3 pt-[90px] md:px-5 md:pl-3 md:pr-2"
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
