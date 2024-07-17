import Title from "../../ui/Title";
import Track from "../tracks/Track";

function SongsResult() {
  return (
    <div className="min-w-96 flex-grow">
      <Title>Songs</Title>
      <table className="w-full">
        <Track noArtist noAlbum />
        <Track noArtist noAlbum />
        <Track noArtist noAlbum />
        <Track noArtist noAlbum />
      </table>
    </div>
  );
}

export default SongsResult;
