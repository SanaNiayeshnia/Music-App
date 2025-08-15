import TrackList from "../tracks/TrackList";
import useAlbum from "./hooks/useAlbum";

function AlbumItems({ id }) {
  const { isLoading, album } = useAlbum(id);

  return (
    <TrackList
      all={true}
      items={album?.tracks?.items?.map((item) => {
        return { ...item, album };
      })}
      noCover
      noAlbum
      isLoading={isLoading}
      context={`spotify:album:${id}`}
    />
  );
}

export default AlbumItems;
