import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import useScrollbar from "../hooks/useScrollbar";
import ListTitle from "./ListTitle";
import ShortPageHeader from "./layout/page/ShortPageHeader";
import Skeleton from "./Skeleton";

function ListContainer({
  items,
  title,
  showAllTo,
  className,
  all = false,
  isLoading,
  discography = false,
  noTitle = false,
  alwaysShowAll = false,
  fetchNextPage = null,
  hasNextPage = false,
  isFetching = false,
  children,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [slicedItems, setSlicedItems] = useState(items);
  const [loadingItems, setLoadingItems] = useState(
    Array.from({ length: all ? 12 : 6 }),
  );

  //max items to display based on the size of the screen
  const maxItems = useMemo(() => {
    return {
      xl: isPlayingTrackbarOpen ? 4 : 6,
      lg: isPlayingTrackbarOpen ? 3 : 4,
      md: isPlayingTrackbarOpen ? 2 : 3,
      sm: 10,
    };
  }, [isPlayingTrackbarOpen]);
  const [screenSizeMaxItems, setScreenSizeMaxItems] = useState(6);
  const ref = useScrollbar();
  const { isSmall } = useSelector((store) => store.global);
  const { ref: endRef, inView } = useInView();

  useEffect(() => {
    function sliceItems() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setSlicedItems(items?.slice(0, maxItems.xl));
        setScreenSizeMaxItems(maxItems.xl);
      } else if (windowWidth >= 1024) {
        setSlicedItems(items?.slice(0, maxItems.lg));
        setScreenSizeMaxItems(maxItems.lg);
      } else if (windowWidth >= 768) {
        setSlicedItems(items?.slice(0, maxItems.md));
        setScreenSizeMaxItems(maxItems.md);
      } else {
        setSlicedItems(items?.slice(0, maxItems.sm));
        setScreenSizeMaxItems(maxItems.sm);
      }
    }

    if (all) setSlicedItems(items);

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
      else setLoadingItems(items?.slice(0, maxItems.sm));
    }

    if (!all) {
      //Change the displayed items count based on window width
      sliceLoadingItems();

      window.addEventListener("resize", sliceLoadingItems);
      return () => window.removeEventListener("resize", sliceLoadingItems);
    }
  }, [all, items, maxItems]);

  useEffect(() => {
    //fetch new items when the user reachs the end of the page
    if (inView && hasNextPage && !isFetching && !isLoading && all)
      fetchNextPage();
  }, [inView, hasNextPage, isFetching, isLoading, fetchNextPage, all]);

  return (
    (isLoading || slicedItems?.length > 0) && (
      <div>
        {!noTitle && (
          <>
            {!all ? (
              <ListTitle
                title={title}
                showAllTo={showAllTo}
                conditionForShowAll={
                  items?.length > screenSizeMaxItems ||
                  (alwaysShowAll && !isLoading)
                }
              />
            ) : (
              <ShortPageHeader title={title} />
            )}
          </>
        )}

        <div className={`space-y-3 ${all && "mt-8"}`}>
          {children}
          <div
            ref={ref}
            className={`${!all && isSmall ? "flex max-w-full items-stretch overflow-auto *:w-44" : "grid grid-cols-2 sm:grid-cols-3"} scrollbar hide-scroll md:max-w-full ${isPlayingTrackbarOpen ? "md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"} grid-rows-1 py-1.5 md:grid md:overflow-hidden ${className}`}
          >
            {!isLoading &&
              slicedItems?.length > 0 &&
              slicedItems?.map((item, index) => (
                <Item
                  key={index}
                  item={item}
                  size="large"
                  discography={discography}
                  ref={slicedItems?.length - 1 === index ? endRef : null}
                />
              ))}
            {((isFetching && all) || isLoading) &&
              loadingItems.map((item, index) => (
                <Item key={index} isLoading={true} size="large" />
              ))}
          </div>
        </div>
      </div>
    )
  );
}

export default ListContainer;
