import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import usePlay from "../features/player/hooks/usePlay";

function PlayButton({
  className,
  uri = "",
  onClick,
  context,
  type,
  isPlaying = false,
  player,
}) {
  const { isPending, playMutate } = usePlay();
  return (
    <div
      className={`${className} min-h-10 min-w-10 rounded-full bg-blue-600 p-2 shadow-md hover:scale-105`}
    >
      {isPlaying ? (
        <TbPlayerPauseFilled
          onClick={(e) => {
            e.stopPropagation();
            player?.pause();
          }}
          className={`h-full w-full cursor-pointer text-white transition-all duration-100`}
        />
      ) : (
        <TbPlayerPlayFilled
          onClick={(e) => {
            e.stopPropagation();
            playMutate({ uri, context, type });
            onClick?.();
          }}
          className={`h-full w-full cursor-pointer text-white transition-all duration-100`}
        />
      )}
    </div>
  );
}

export default PlayButton;
