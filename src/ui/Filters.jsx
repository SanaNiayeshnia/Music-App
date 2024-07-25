function Filters({ items }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer rounded-full bg-white/50 px-2.5 py-1 text-sm text-black shadow hover:scale-105 hover:bg-white/70 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Filters;
