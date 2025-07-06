import { useSelector } from "react-redux";
import Title from "../../ui/Title";
import Category from "./Category";
import useCategories from "./hooks/useCategories";
import ShowAll from "../../ui/ShowAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CategoryList({ all = false }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isLoading, categories } = useCategories();
  const items = all ? categories : categories?.slice(0, 6);
  return (
    <div>
      <div className="flex justify-between gap-4">
        <Title>Browse all</Title>
        {!all && !isLoading && <ShowAll to="/search">Show all</ShowAll>}
      </div>
      {all ? (
        <div
          className={`grid-cols-2 ${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} mt-5 grid grid-rows-1 items-center gap-5 overflow-hidden`}
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
          spaceBetween={25}
          slidesPerView={"auto"}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            400: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: {
              slidesPerView: 3,
            },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          className="mt-7"
        >
          {isLoading
            ? Array.from({ length: 12 }).map((cat, index) => (
                <SwiperSlide key={index} className="max-w-60">
                  <Category isLoading={true} />
                </SwiperSlide>
              ))
            : items?.map((cat, index) => (
                <SwiperSlide key={index} className="max-w-60">
                  <Category category={cat} />
                </SwiperSlide>
              ))}
        </Swiper>
      )}
    </div>
  );
}

export default CategoryList;
