import { useQuery } from "@tanstack/react-query";
import { getSavedAlbums } from "../../../services/albumsApi";

function useSavedAlbums() {
  const { isLoading, data } = useQuery({
    queryKey: ["saved-albums"],
    queryFn: getSavedAlbums,
  });

  const savedAlbums = data?.albums;
  const count = data?.count;
  const next = data?.next;
  return { isLoading, savedAlbums, count, next };
}

export default useSavedAlbums;
