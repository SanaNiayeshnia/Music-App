import { useRef } from "react";
import { useEffect } from "react";

function useScrollbar() {
  const ref = useRef();
  useEffect(() => {
    function showScrollBar() {
      ref?.current?.classList.remove("hide-scroll");
      ref?.current?.classList.add("show-scroll");
    }
    function hideScrollBar() {
      ref?.current?.classList.add("hide-scroll");
      ref?.current?.classList.remove("show-scroll");
    }

    ref?.current?.addEventListener("mouseenter", showScrollBar);
    ref?.current?.addEventListener("mouseleave", hideScrollBar);
    ref?.current?.addEventListener("touchstart", showScrollBar);
    ref?.current?.addEventListener("touchend", hideScrollBar);

    return () => {
      ref?.current?.removeEventListener("mouseenter", showScrollBar);
      ref?.current?.removeEventListener("mouseleave", hideScrollBar);
      ref?.current?.removeEventListener("touchstart", showScrollBar);
      ref?.current?.removeEventListener("touchend", hideScrollBar);
    };
  }, []);

  return ref;
}

export default useScrollbar;
