import { useQuery } from "@tanstack/react-query";
import { getLikedSongsPlaylist } from "../../../services/playlistsAPi";

function useLikedSongsPlaylist() {
  const { isLoading, data: likedSongsPlaylist } = useQuery({
    queryKey: ["Liked-Songs-playlist"],
    queryFn: getLikedSongsPlaylist,
  });
  return { isLoading, likedSongsPlaylist };
}

export default useLikedSongsPlaylist;
