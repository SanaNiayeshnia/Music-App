import { useQuery } from "@tanstack/react-query";
import { getFeaturedPlaylists } from "../../../services/playlistsAPi";

function useFeaturedPlaylists() {
  const { isLoading, data: featuredPlaylists } = useQuery({
    queryKey: ["featured-playlists"],
    queryFn: getFeaturedPlaylists,
  });
  return { isLoading, featuredPlaylists };
}

export default useFeaturedPlaylists;
