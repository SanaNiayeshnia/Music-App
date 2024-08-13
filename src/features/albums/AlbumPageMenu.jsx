import PageMenu from "../../ui/PageMenu";
import useIsAlbumSaved from "./useIsAlbumSaved";

function AlbumPageMenu({ album }) {
  const { isLoading, isAlbumSaved } = useIsAlbumSaved(album.id);
  return (
    <PageMenu item={album} isSaved={isLoading ? false : isAlbumSaved[0]} />
  );
}

export default AlbumPageMenu;
