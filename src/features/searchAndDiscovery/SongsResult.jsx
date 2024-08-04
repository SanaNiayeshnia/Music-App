import Title from "../../ui/Title";
import Track from "../tracks/Track";

function SongsResult({ items }) {
  console.log(items);
  return (
    <div className="min-w-96 flex-grow">
      <Title>Songs</Title>
      <table className="w-full">
        <tbody>
          {items?.slice(0, 4).map((item, index) => (
            <Track
              track={item}
              index={index + 1}
              key={item.id}
              noArtist
              noAlbum
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongsResult;
