import { Outlet } from "react-router-dom";
import useScrollbar from "../../hooks/useScrollbar";
import useMainContext from "./useMainContext";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Main() {
  const ref = useScrollbar();
  const { setMainRef, setIsMainScrolled } = useMainContext();
  const { isSmall } = useSelector((store) => store.global);
  useEffect(() => setMainRef(ref), [ref, setMainRef]);

  return (
    <div
      className={`${!isSmall && "rounded-lg"} relative h-screen w-full bg-white/50 shadow-lg backdrop-blur-md md:h-auto lg:min-w-[425px] dark:bg-black/50`}
    >
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto pb-5 pl-3 pr-2 pt-[90px] md:px-5"
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
