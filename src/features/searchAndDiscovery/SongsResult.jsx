import Title from "../../ui/Title";
import Track from "../tracks/Track";

function SongsResult() {
  return (
    <div className="min-w-96 flex-grow">
      <Title>Songs</Title>
      <div>
        <Track noArtist noAlbum />
        <Track noArtist noAlbum />
        <Track noArtist noAlbum />
        <Track noArtist noAlbum />
      </div>
    </div>
  );
}

export default SongsResult;
