import useCurrentlyPlayingTrack from "../features/player/useCurrentlyPlayingTrack";

function PageBody({ children, noPadding, noSpace, className }) {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  console.log(currentlyPlayingTrack);
  return (
    <div
      className={`${currentlyPlayingTrack ? "pb-[160px]" : "pb-[90px]"} md:pb-0 ${!noPadding && "pt-8"} ${!noSpace && "space-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default PageBody;
