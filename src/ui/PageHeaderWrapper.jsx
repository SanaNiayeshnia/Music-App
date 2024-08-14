function PageHeaderWrapper({ background, children, short = false }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className={`relative ${short ? "h-40" : "h-52 lg:h-[17rem]"} w-full rounded-lg shadow-md`}
    >
      <div
        className={`${short ? "dark:from-blue-600/80" : "dark:from-black/80"} absolute inset-0 rounded-lg bg-gradient-to-t from-white/80 from-[1%] brightness-125 dark:brightness-75`}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center gap-5 px-5">
        {children}
      </div>
    </div>
  );
}

export default PageHeaderWrapper;
