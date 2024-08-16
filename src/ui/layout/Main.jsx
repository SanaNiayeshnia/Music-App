import { Outlet } from "react-router-dom";
import useScrollbar from "../../hooks/useScrollbar";
import { MainContext } from "./useMainContext";
import { useState } from "react";

function Main() {
  const ref = useScrollbar();
  const [isMainScrolled, setIsMainScrolled] = useState(false);

  function scrollMainToTop() {
    if (ref.current) ref.current.scrollTop = 0;
  }

  return (
    <MainContext.Provider value={{ scrollMainToTop, isMainScrolled }}>
      <div className="relative w-full overflow-hidden rounded-lg bg-white/50 shadow-lg backdrop-blur-md lg:min-w-[425px] dark:bg-black/50">
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
    </MainContext.Provider>
  );
}

export default Main;
