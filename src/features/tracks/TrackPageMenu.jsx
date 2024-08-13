import PageMenu from "../../ui/PageMenu";
import useIsTrackSaved from "./useIsTrackSaved";

function TrackPageMenu({ track }) {
  const { isLoading, isTrackSaved } = useIsTrackSaved(track.id);
  return <PageMenu item={track} isSaved={isLoading ? false : isTrackSaved} />;
}

export default TrackPageMenu;
