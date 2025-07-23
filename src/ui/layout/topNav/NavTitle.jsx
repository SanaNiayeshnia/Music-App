import PlayButton from "../../PlayButton";

function NavTitle({ children, noPlayButton }) {
  return (
    <div className="flex items-center gap-2">
      {!noPlayButton && <PlayButton />}

      <p
        className={`w-full max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-black first-letter:uppercase sm:max-w-xs dark:text-white`}
      >
        {children}
      </p>
    </div>
  );
}

export default NavTitle;
