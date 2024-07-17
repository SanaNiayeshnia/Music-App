import PlayButton from "./PlayButton";

function FloatingPlayButton({ isHovered }) {
  console.log(isHovered);
  return (
    <PlayButton
      className={`${isHovered ? "animation-show-playicon" : "animation-hide-playicon"} absolute bottom-1 right-1 hidden min-h-10 min-w-10 shadow-md duration-300 group-hover:inline-block`}
    />
  );
}

export default FloatingPlayButton;
