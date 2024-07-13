import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import Track from "../tracks/Track";

function Popular() {
  return (
    <div>
      <Title>Popular</Title>
      <div>
        <Track />
        <Track />
        <Track />
        <ShowAll>See more</ShowAll>
      </div>
    </div>
  );
}

export default Popular;
