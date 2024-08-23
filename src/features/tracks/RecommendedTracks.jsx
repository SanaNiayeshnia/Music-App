import ListTitle from "../../ui/ListTitle";
import TrackListV2 from "./TrackListV2";

function RecommendedTracks({ recommendations }) {
  return (
    <div className="pb-5">
      <ListTitle conditionForShowAll={false} title="Recommended" />
      <TrackListV2
        tracks={recommendations}
        max={10}
        noArtist={false}
        noAlbum={false}
      />
    </div>
  );
}

export default RecommendedTracks;
