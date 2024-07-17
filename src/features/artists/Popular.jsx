import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import Track from "../tracks/Track";

function Popular() {
  return (
    <div>
      <Title>Popular</Title>
      <table className="w-full">
        <Track noArtist noAlbum extra="stream" />
        <Track noArtist noAlbum extra="stream" />
        <Track noArtist noAlbum extra="stream" />
        <ShowAll className="px-3">See more</ShowAll>
      </table>
    </div>
  );
}

export default Popular;
