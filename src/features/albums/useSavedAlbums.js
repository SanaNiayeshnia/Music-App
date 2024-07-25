import { useQuery } from "@tanstack/react-query";
import { getSavedAlbums } from "../../services/albumsApi";

function useSavedAlbums() {
  const { isLoading, data } = useQuery({
    queryKey: ["saved-albums"],
    queryFn: getSavedAlbums,
  });

  const savedAlbums = data?.items?.map((item) => item.album);
  return { isLoading, savedAlbums };
}

export default useSavedAlbums;
