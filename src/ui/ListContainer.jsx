import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function ListContainer({ children, className, all = false, isLoading }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [slicedChildren, setSlicedChildren] = useState(children);
  const [loadingItems, setLoadingItems] = useState(
    Array.from({ length: all ? 12 : 6 }),
  );
  const maxItems = useMemo(() => {
    return {
      xl: isPlayingTrackbarOpen ? 4 : 6,
      lg: isPlayingTrackbarOpen ? 3 : 4,
      md: isPlayingTrackbarOpen ? 2 : 3,
    };
  }, [isPlayingTrackbarOpen]);

  useEffect(() => {
    function sliceChildren() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280)
        setSlicedChildren(children?.slice(0, maxItems.xl));
      else if (windowWidth >= 1024)
        setSlicedChildren(children?.slice(0, maxItems.lg));
      else if (windowWidth >= 768)
        setSlicedChildren(children?.slice(0, maxItems.md));
      else setSlicedChildren(children);
    }

    if (!all) {
      //Change the displayed items count based on window width
      sliceChildren();

      window.addEventListener("resize", sliceChildren);
      return () => window.removeEventListener("resize", sliceChildren);
    }
  }, [children, setSlicedChildren, all, maxItems]);

  useEffect(() => {
    function sliceLoadingItems() {
      const items = Array.from({ length: all ? 12 : 6 });
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) setLoadingItems(items?.slice(0, maxItems.xl));
      else if (windowWidth >= 1024)
        setLoadingItems(items?.slice(0, maxItems.lg));
      else if (windowWidth >= 768)
        setLoadingItems(items?.slice(0, maxItems.md));
      else setLoadingItems(items);
    }

    if (!all) {
      //Change the displayed items count based on window width
      sliceLoadingItems();

      window.addEventListener("resize", sliceLoadingItems);
      return () => window.removeEventListener("resize", sliceLoadingItems);
    }
  }, [all, children, maxItems]);

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"} grid grid-rows-1 overflow-hidden py-1.5 ${className}`}
    >
      {isLoading
        ? loadingItems.map((item, index) => (
            <Item key={index} isLoading={true} size="large" />
          ))
        : slicedChildren}
    </div>
  );
}

export default ListContainer;
