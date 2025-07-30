import { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import useScrollbar from "../hooks/useScrollbar";
import ListTitle from "./ListTitle";
import ShortPageHeader from "./layout/page/ShortPageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function ListContainer({
  items,
  rounded = false,
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
  autoPlay = false,
  children,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  // const [slicedItems, setSlicedItems] = useState(items);
  const loadingItems = Array.from({ length: 12 });
  const ref = useScrollbar();
  const { ref: endRef, inView } = useInView();

  useEffect(() => {
    //fetch new items when the user reachs the end of the page
    if (inView && hasNextPage && !isFetching && !isLoading && all)
      fetchNextPage();
  }, [inView, hasNextPage, isFetching, isLoading, fetchNextPage, all]);

  return (
    (isLoading || items?.length > 0) && (
      <div className="min-h-80">
        {!noTitle && (
          <>
            {!all ? (
              <ListTitle
                title={title}
                showAllTo={showAllTo}
                conditionForShowAll={
                  items?.length > 10 || (alwaysShowAll && !isLoading)
                }
              />
            ) : (
              <ShortPageHeader title={title} />
            )}
          </>
        )}

        {!all ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            loop={true}
            className="mt-7"
            autoplay={autoPlay ? { delay: 3000 } : false}
            modules={[Autoplay]}
          >
            {isLoading
              ? loadingItems.map((item, index) => (
                  <SwiperSlide key={index} className="max-w-[185px]">
                    <Item key={index} isLoading={true} size="large" />
                  </SwiperSlide>
                ))
              : items?.slice(0, 10).map((item, index) => (
                  <SwiperSlide key={index} className="max-w-[185px]">
                    <Item item={item} size="large" discography={discography} />
                  </SwiperSlide>
                ))}
          </Swiper>
        ) : (
          <div className={`space-y-3 ${all && "mt-8"} `}>
            {children}
            <div
              ref={ref}
              className={`scrollbar hide-scroll grid grid-cols-2 sm:grid-cols-3 md:max-w-full ${isPlayingTrackbarOpen ? "md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"} grid-rows-1 py-1.5 md:grid md:overflow-hidden ${className}`}
            >
              {!isLoading &&
                items?.length > 0 &&
                items?.map((item, index) => (
                  <Item
                    key={index}
                    item={item}
                    size="large"
                    discography={discography}
                    ref={items?.length - 1 === index ? endRef : null}
                  />
                ))}
              {((isFetching && all) || isLoading) &&
                loadingItems.map((item, index) => (
                  <Item
                    key={index}
                    isLoading={true}
                    size="large"
                    rounded={rounded}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default ListContainer;
