function PageHeader({ children, background }) {
  return (
    <div
      className={`relative h-72 w-full bg-[url(${background})] bg-cover bg-fixed bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white from-[0.5%] brightness-150 filter dark:from-black dark:brightness-50"></div>
      <div className="absolute inset-0 gap-5 space-y-5 px-5 pt-[90px]">
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
