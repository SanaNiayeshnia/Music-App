import useCurrentlyPlayingTrack from "../../../features/player/hooks/useCurrentlyPlayingTrack";

function PageBody({
  children,
  noPadding = false,
  noSpace = false,
  className = "",
}) {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return (
    <div
      className={`${currentlyPlayingTrack ? "pb-[170px]" : "pb-[100px]"} md:pb-5 ${!noPadding && "pt-8"} flex flex-col ${!noSpace && "gap-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default PageBody;
