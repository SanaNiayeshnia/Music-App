import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ListContainer({ children, className }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [slicedChildren, setSlicedChildren] = useState(children);

  useEffect(() => {
    //Change the displayed items count based on window width
    const maxItems = {
      xl: isPlayingTrackbarOpen ? 4 : 6,
      lg: isPlayingTrackbarOpen ? 3 : 4,
      md: isPlayingTrackbarOpen ? 2 : 3,
    };
    function sliceChildren() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280)
        setSlicedChildren(children.slice(0, maxItems.xl));
      else if (windowWidth >= 1024)
        setSlicedChildren(children.slice(0, maxItems.lg));
      else if (windowWidth >= 768)
        setSlicedChildren(children.slice(0, maxItems.md));
      else setSlicedChildren(children);
    }

    sliceChildren();

    window.addEventListener("resize", sliceChildren);
    return () => window.removeEventListener("resize", sliceChildren);
  }, [children, setSlicedChildren, isPlayingTrackbarOpen]);

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"} grid grid-rows-1 items-center overflow-hidden py-1.5 ${className}`}
    >
      {slicedChildren}
    </div>
  );
}

export default ListContainer;
