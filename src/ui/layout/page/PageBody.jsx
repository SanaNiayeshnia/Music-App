import { usePlayerContext } from "../../../contexts/player/usePlayerContext";

function PageBody({
  children,
  noPadding = false,
  noSpace = false,
  className = "",
}) {
  const { currentTrack } = usePlayerContext();
  return (
    <div
      className={`${currentTrack ? "pb-[170px]" : "pb-[100px]"} md:pb-5 ${!noPadding && "pt-8"} flex flex-col ${!noSpace && "gap-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default PageBody;
