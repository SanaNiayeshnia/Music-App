import PlayButton from "./PlayButton";

function FloatingPlayButton({ isHovered = false, uri = "" }) {
  return (
    <PlayButton
      uri={uri}
      className={`${isHovered ? "animation-show-playicon" : "animation-hide-playicon"} absolute bottom-1 right-1 hidden shadow-md duration-300 group-hover:inline-block`}
    />
  );
}

export default FloatingPlayButton;
