import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../../../services/albumsApi";
import { useSelector } from "react-redux";

function useAlbum(id) {
  const { accessToken } = useSelector((store) => store.authentication);
  const { isLoading, data: album } = useQuery({
    queryKey: ["album", id],
    queryFn: () => getAlbum(id),
    enabled: Boolean(accessToken),
  });
  return {
    isLoading,
    album,
  };
}

export default useAlbum;
