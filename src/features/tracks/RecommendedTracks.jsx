import Title from "../../ui/Title";
import TrackListV2 from "./TrackListV2";

function RecommendedTracks({ recommendations }) {
  return (
    <div className="pb-5">
      <Title>Recommended</Title>
      <TrackListV2 tracks={recommendations} />
    </div>
  );
}

export default RecommendedTracks;
