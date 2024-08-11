import { useParams } from "react-router-dom";
import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import Title from "../../ui/Title";
import usePlaylist from "./usePlaylist";
import useRelatedPlaylists from "./useRelatedPlaylists";
import useArtist from "../artists/useArtist";
import ShowAll from "../../ui/ShowAll";
import NothingFound from "../../ui/NothingFound";

function AlsoLikePlaylists({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingPlaylist, playlist } = usePlaylist(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    playlist?.tracks?.items[0]?.track?.artists[0]?.id,
  );
  const { isLoading: isLoadingRelatedPlaylists, relatedPlaylists } =
    useRelatedPlaylists(artist?.genres[0]);

  return (
    <div key={all}>
      <div className="flex items-center justify-between">
        <Title>You might also like</Title>
        {!all && relatedPlaylists?.length > 6 && (
          <ShowAll to="might-also-like">Show all</ShowAll>
        )}
      </div>
      {relatedPlaylists?.length === 0 && <NothingFound />}
      <ListContainer
        all={all}
        isLoading={
          isLoadingPlaylist || isLoadingRelatedPlaylists || isLoadingArtist
        }
      >
        {relatedPlaylists?.map((playlist) => (
          <Item item={playlist} key={playlist?.id} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default AlsoLikePlaylists;
