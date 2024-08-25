import ListTitle from "../../ui/ListTitle";
import TrackListV2 from "../tracks/TrackListV2";

function Popular({ artistsTopTracks }) {
  return (
    <div>
      <ListTitle title="Popular" conditionForShowAll={false} />
      <TrackListV2 tracks={artistsTopTracks} />
    </div>
  );
}

export default Popular;
