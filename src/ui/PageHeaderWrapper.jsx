function PageHeaderWrapper({ background, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
      className={`relative h-52 w-full rounded-lg shadow-md lg:h-[17rem]`}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/80 from-[1%] brightness-125 dark:from-black/80 dark:brightness-75"></div>
      <div className="absolute inset-0 flex flex-col justify-center gap-5 px-5">
        {children}
      </div>
    </div>
  );
}

export default PageHeaderWrapper;
