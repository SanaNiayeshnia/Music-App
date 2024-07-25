import { TbX } from "react-icons/tb";
import { useSelector } from "react-redux";

function Filters({ items, addHandler, removeHandler }) {
  const { currentFiltersArray } = useSelector((store) => store.library);

  function handleOnClick(filter) {
    console.log(checkFilter());
    if (checkFilter(filter)) removeHandler(filter);
    else addHandler(filter);
  }

  function checkFilter(value) {
    //I use this function to determine which filter button should get blue background and X mark
    return currentFiltersArray.includes(value);
  }

  return (
    <div className="flex items-center gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${checkFilter(item.value) ? "group flex items-center gap-1 bg-blue-600 text-white" : "bg-white/50 text-black hover:scale-105 hover:bg-white/70 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"} cursor-pointer rounded-full px-2.5 py-1 text-sm shadow`}
          onClick={() => handleOnClick(item.value)}
        >
          {item.title}
          {checkFilter(item.value) && (
            <TbX className="text-white group-hover:scale-125" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Filters;
