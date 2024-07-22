function Genre() {
  return (
    <div className="group relative flex min-h-36 cursor-pointer overflow-hidden rounded-md bg-white/50 px-4 py-4 shadow dark:bg-black/50">
      <p className="text-lg font-bold text-black dark:text-white">Rock</p>
      <img
        src="/test.png"
        alt=""
        className="absolute -bottom-5 -right-5 w-[7.5rem] rotate-[30deg] rounded-md shadow-md group-hover:scale-110"
      />
    </div>
  );
}

export default Genre;
