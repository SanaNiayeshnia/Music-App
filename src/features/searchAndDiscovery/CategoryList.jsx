import { useSelector } from "react-redux";
import Title from "../../ui/Title";
import Category from "./Category";
import useCategories from "./hooks/useCategories";
import ShowAll from "../../ui/ShowAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TbChevronRight } from "react-icons/tb";
import { Navigation } from "swiper/modules";

function CategoryList({ all = false }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isLoading, categories } = useCategories();
  const items = all ? categories : categories?.slice(0, 6);
  return (
    <div className={`relative w-full overflow-hidden ${!all ? "md:pr-3" : ""}`}>
      <div className="flex justify-between gap-4">
        <Title>Browse all categories</Title>
        {!all && !isLoading && <ShowAll to="/search">Show all</ShowAll>}
      </div>

      {!all && (
        <div
          id="categorySwiper"
          className={`absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border bg-blue-600/50 p-2 backdrop-blur-lg transition-all duration-300 md:block dark:border-white dark:bg-black/50 ${isLoading ? "invisible" : ""}`}
        >
          <TbChevronRight className="text-xl text-white transition-all duration-300 dark:text-white" />
        </div>
      )}
      {all ? (
        <div
          className={`grid-cols-2 ${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} mt-5 grid grid-rows-1 place-content-center items-center justify-center gap-5 overflow-hidden`}
        >
          {isLoading
            ? Array.from({ length: 12 }).map((cat, index) => (
                <Category isLoading={true} key={index} />
              ))
            : items?.map((cat, index) => (
                <Category category={cat} key={index} />
              ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={15}
          slidesPerView={"auto"}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            400: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5, spaceBetween: 25 },
            1024: {
              slidesPerView: 3,
            },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          className="mt-7"
          navigation={{ nextEl: "#categorySwiper" }}
          modules={[Navigation]}
        >
          {isLoading
            ? Array.from({ length: 12 }).map((cat, index) => (
                <SwiperSlide key={index} className="max-w-60">
                  <Category isLoading={true} />
                </SwiperSlide>
              ))
            : items?.map((cat, index) => (
                <SwiperSlide key={index} className="">
                  <Category category={cat} />
                </SwiperSlide>
              ))}
        </Swiper>
      )}
    </div>
  );
}

export default CategoryList;
