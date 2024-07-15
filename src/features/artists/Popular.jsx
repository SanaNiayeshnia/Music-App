import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import Track from "../tracks/Track";

function Popular() {
  return (
    <div>
      <Title>Popular</Title>
      <div>
        <Track noArtist />
        <Track noArtist />
        <Track noArtist />
        <ShowAll className="px-3">See more</ShowAll>
      </div>
    </div>
  );
}

export default Popular;
