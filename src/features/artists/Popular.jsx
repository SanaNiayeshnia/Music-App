import Title from "../../ui/Title";
import TrackListV2 from "../tracks/TrackListV2";

function Popular({ artistsTopTracks }) {
  return (
    <div>
      <Title>Popular</Title>
      <TrackListV2 tracks={artistsTopTracks} />
    </div>
  );
}

export default Popular;
