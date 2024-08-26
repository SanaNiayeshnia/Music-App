import { useQuery } from "@tanstack/react-query";
import { checkUsersSavedAlbums } from "../../../services/albumsApi";

function useIsAlbumSaved(id) {
  const { isLoading, data: isAlbumSaved } = useQuery({
    queryKey: ["is-album-saved", id],
    queryFn: () => checkUsersSavedAlbums(id),
  });
  return { isLoading, isAlbumSaved };
}

export default useIsAlbumSaved;
