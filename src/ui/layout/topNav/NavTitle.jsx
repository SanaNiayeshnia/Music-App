import on from "../../PlayButton";

function NavTitle({ children, noPlayButton, uri }) {
  return (
    <div className="flex items-center gap-2">
      {!noPlayButton && <PlayButton uri={uri} />}

      <p
        className={`max-w-[10rem] flex-grow items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-black first-letter:uppercase xs:max-w-[15rem] sm:max-w-xs lg:max-w-md xl:max-w-lg dark:text-white`}
      >
        {children}
      </p>
    </div>
  );
}

export default NavTitle;
