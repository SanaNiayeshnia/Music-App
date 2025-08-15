import PlayButton from "../../PlayButton";

function NavTitle({
  children,
  noPlayButton = false,
  uri,
  icon,
  type,
  context,
}) {
  return (
    <div className="flex items-center gap-2">
      {!noPlayButton && <PlayButton uri={uri} type={type} context={context} />}
      {icon}

      <p
        className={`max-w-[13rem] flex-grow items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-black first-letter:uppercase xs:max-w-[15rem] sm:max-w-xs lg:max-w-md xl:max-w-lg dark:text-white`}
      >
        {children}
      </p>
    </div>
  );
}

export default NavTitle;
