import { useQuery } from "@tanstack/react-query";
import { getSavedAlbums } from "../../../services/albumsApi";
import { useSelector } from "react-redux";

function useSavedAlbums() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data } = useQuery({
    queryKey: ["saved-albums"],
    queryFn: getSavedAlbums,
    enabled: Boolean(accessToken),
  });

  const savedAlbums = data?.albums;
  const count = data?.count;
  const next = data?.next;
  return { isLoading, savedAlbums, count, next };
}

export default useSavedAlbums;
