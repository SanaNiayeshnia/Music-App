function PageHeaderWrapper({ background, children }) {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className={`relative h-52 w-full rounded-lg shadow-md lg:h-[17rem]`}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/80 from-[1%] brightness-150 dark:from-black/80 dark:brightness-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center gap-5 px-5">
        {children}
      </div>
    </div>
  );
}

export default PageHeaderWrapper;
