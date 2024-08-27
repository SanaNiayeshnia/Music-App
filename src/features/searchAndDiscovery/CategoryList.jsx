import { useSelector } from "react-redux";
import Title from "../../ui/Title";
import Category from "./Category";
import useCategories from "./hooks/useCategories";

function CategoryList() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isLoading, categories } = useCategories();
  return (
    <div>
      <Title>Browse all</Title>
      <div
        className={`grid-cols-2 ${isPlayingTrackbarOpen ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} mt-5 grid grid-rows-1 items-center gap-5 overflow-hidden`}
      >
        {isLoading
          ? Array.from({ length: 12 }).map((cat, index) => (
              <Category isLoading={true} key={index} />
            ))
          : categories?.map((cat) => <Category category={cat} key={cat.id} />)}
      </div>
    </div>
  );
}

export default CategoryList;
