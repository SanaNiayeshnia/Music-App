import { useRef } from "react";
import { useEffect } from "react";

function useScrollbar() {
  const ref = useRef();
  useEffect(() => {
    function showHideScrollBar() {
      ref?.current?.classList.toggle("hide-scroll");
    }

    ref?.current?.addEventListener("mouseenter", showHideScrollBar);
    ref?.current?.addEventListener("mouseleave", showHideScrollBar);
    ref?.current?.addEventListener("touchstart", showHideScrollBar);
    ref?.current?.addEventListener("touchend", showHideScrollBar);

    return () => {
      ref?.current?.removeEventListener("mouseenter", showHideScrollBar);
      ref?.current?.removeEventListener("mouseleave", showHideScrollBar);
      ref?.current?.removeEventListener("touchstart", showHideScrollBar);
      ref?.current?.removeEventListener("touchend", showHideScrollBar);
    };
  }, []);

  return ref;
}

export default useScrollbar;
