import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function ListContainer({
  items,
  className,
  all = false,
  isLoading,
  discography = false,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [slicedItems, setSlicedItems] = useState(items);
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
    function sliceItems() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) setSlicedItems(items?.slice(0, maxItems.xl));
      else if (windowWidth >= 1024)
        setSlicedItems(items?.slice(0, maxItems.lg));
      else if (windowWidth >= 768) setSlicedItems(items?.slice(0, maxItems.md));
      else setSlicedItems(items);
    }

    if (!all) {
      //Change the displayed items count based on window width
      sliceItems();

      window.addEventListener("resize", sliceItems);
      return () => window.removeEventListener("resize", sliceItems);
    }
  }, [items, setSlicedItems, all, maxItems]);

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
  }, [all, items, maxItems]);

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"} grid grid-rows-1 overflow-hidden py-1.5 ${className}`}
    >
      {isLoading
        ? loadingItems.map((item, index) => (
            <Item key={index} isLoading={true} size="large" />
          ))
        : slicedItems?.map((item) => (
            <Item
              key={item.id}
              item={item}
              size="large"
              discography={discography}
            />
          ))}
    </div>
  );
}

export default ListContainer;
