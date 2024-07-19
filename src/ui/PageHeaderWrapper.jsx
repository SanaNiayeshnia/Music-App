function PageHeaderWrapper({ background, children }) {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className={`relative h-72 w-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 from-[0.5%] brightness-150 filter dark:from-black/40 dark:brightness-50"></div>
      <div className="absolute inset-0 gap-5 space-y-5 px-5 pt-[90px]">
        {children}
      </div>
    </div>
  );
}

export default PageHeaderWrapper;
