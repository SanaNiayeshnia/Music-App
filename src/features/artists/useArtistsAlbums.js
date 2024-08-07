import { useQuery } from "@tanstack/react-query";
import { getArtistsAlbums } from "../../services/artistsAPi";

function useArtistsAlbums(id) {
  const { isLoading, data: artistsAlbums } = useQuery({
    queryKey: ["artists-albums", id],
    queryFn: () => getArtistsAlbums(id),
  });
  return { isLoading, artistsAlbums };
}

export default useArtistsAlbums;
