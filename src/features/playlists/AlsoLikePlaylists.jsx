import { useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import usePlaylist from "./usePlaylist";
import useRelatedPlaylists from "./useRelatedPlaylists";
import useArtist from "../artists/useArtist";

function AlsoLikePlaylists({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingPlaylist, playlist } = usePlaylist(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    playlist?.tracks?.items[0]?.track?.artists[0]?.id,
  );
  const { isLoading: isLoadingRelatedPlaylists, relatedPlaylists } =
    useRelatedPlaylists(artist?.genres?.at(0) || "pop");

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        all={all}
        title="You might also like"
        showAllTo="might-also-like"
        isLoading={
          isLoadingPlaylist || isLoadingRelatedPlaylists || isLoadingArtist
        }
        items={relatedPlaylists}
      />
    </div>
  );
}

export default AlsoLikePlaylists;
