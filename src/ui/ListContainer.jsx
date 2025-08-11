import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import useScrollbar from "../hooks/useScrollbar";
import ListTitle from "./ListTitle";
import ShortPageHeader from "./layout/page/ShortPageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { TbChevronRight } from "react-icons/tb";

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
  const uniqueId = `custom-next-${new Date().getTime()}`;

  useEffect(() => {
    //fetch new items when the user reachs the end of the page
    if (inView && hasNextPage && !isFetching && !isLoading && all)
      fetchNextPage();
  }, [inView, hasNextPage, isFetching, isLoading, fetchNextPage, all]);

  return (
    (isLoading || items?.length > 0) && (
      <div className={`relative min-h-80 ${!all ? "md:pr-3" : ""}`}>
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

        {!all && (
          <div
            id={uniqueId}
            className={`absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border bg-blue-600/50 p-2 backdrop-blur-lg transition-all duration-300 md:inline-block dark:border-white dark:bg-black/50 ${isLoading ? "invisible" : ""}`}
          >
            <TbChevronRight className="text-xl text-white transition-all duration-300 dark:text-white" />
          </div>
        )}

        {!all ? (
          <Swiper
            spaceBetween={5}
            slidesPerView={"auto"}
            loop={true}
            className="mt-7"
            autoplay={autoPlay ? { delay: 3000 } : false}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: `#${uniqueId}`,
            }}
            breakpoints={{
              768: {
                spaceBetween: 10,
              },
            }}
            watchOverflow={true}
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
