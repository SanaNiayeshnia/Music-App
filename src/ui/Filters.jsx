import { TbX } from "react-icons/tb";

function Filters({ options, handler, currentFilter }) {
  function handleOnClick(filter) {
    handler(filter);
  }

  return (
    <div className="flex items-center gap-2">
      <div
        onClick={() => handleOnClick("")}
        className={`${currentFilter === "" ? "group flex items-center gap-1 bg-blue-600 text-white" : "bg-white/50 text-black hover:scale-105 hover:bg-white/70 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"} -order-2 cursor-pointer rounded-full px-2.5 py-1 text-sm shadow`}
      >
        All
      </div>
      {options?.map((opt, index) => (
        <div
          key={index}
          className={`${currentFilter === opt.value ? "group flex items-center gap-1 bg-blue-600 text-white" : "bg-white/50 text-black hover:scale-105 hover:bg-white/70 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"} cursor-pointer rounded-full px-2.5 py-1 text-sm shadow`}
          onClick={() => handleOnClick(opt.value)}
        >
          <span>{opt.title}</span>
          {currentFilter === opt.value && (
            <TbX className="text-white group-hover:scale-125" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Filters;
