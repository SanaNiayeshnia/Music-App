import { useQuery } from "@tanstack/react-query";
import { getFeaturedPlaylists } from "../../../services/playlistsAPi";
import { useSelector } from "react-redux";

function useFeaturedPlaylists() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: featuredPlaylists } = useQuery({
    queryKey: ["featured-playlists"],
    queryFn: getFeaturedPlaylists,
    enabled: Boolean(accessToken),
  });
  return { isLoading, featuredPlaylists };
}

export default useFeaturedPlaylists;
