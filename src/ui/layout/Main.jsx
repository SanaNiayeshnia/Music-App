import { Outlet } from "react-router-dom";
import TopNav from "../TopNav";
import { useState } from "react";
import useScrollbar from "../../hooks/useScrollbar";

function Main() {
  const [isMainScrolled, setIsMainScrolled] = useState(false);
  const ref = useScrollbar();

  return (
    <div className="relative w-full overflow-hidden rounded-md bg-white pb-5 shadow-md dark:bg-glass-100">
      <TopNav isMainScrolled={isMainScrolled} />
      <div
        ref={ref}
        className="scrollbar hide-scroll h-full overflow-auto"
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
