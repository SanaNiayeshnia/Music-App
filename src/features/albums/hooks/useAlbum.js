import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../../../services/albumsApi";

function useAlbum(id) {
  const { isLoading, data: album } = useQuery({
    queryKey: ["album", id],
    queryFn: () => getAlbum(id),
    enabled: Boolean(id),
  });
  return {
    isLoading,
    album,
  };
}

export default useAlbum;
