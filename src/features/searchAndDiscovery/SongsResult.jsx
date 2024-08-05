import Title from "../../ui/Title";
import Track from "../tracks/Track";

function SongsResult({ items, isLoading }) {
  return (
    <div className="min-w-96 flex-grow">
      <Title>Songs</Title>
      <table className="w-full">
        <tbody>
          {isLoading
            ? Array.from({ length: 4 }).map((item, index) => (
                <Track key={index} isLoading={isLoading} index={index + 1} />
              ))
            : items
                ?.slice(0, 4)
                .map((item, index) => (
                  <Track
                    isLoading={isLoading}
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
