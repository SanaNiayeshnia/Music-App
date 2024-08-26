import { useQuery } from "@tanstack/react-query";
import { checkUsersSavedAlbums } from "../../../services/albumsApi";
import { useSelector } from "react-redux";

function useIsAlbumSaved(id) {
  const { accessToken } = useSelector((store) => store.authentication);
  const { isLoading, data: isAlbumSaved } = useQuery({
    queryKey: ["is-album-saved", id],
    queryFn: () => checkUsersSavedAlbums(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, isAlbumSaved };
}

export default useIsAlbumSaved;
