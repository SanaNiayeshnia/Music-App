import { useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import usePlaylist from "./hooks/usePlaylist";
import useRelatedPlaylists from "./hooks/useRelatedPlaylists";
import useArtist from "../artists/hooks/useArtist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function AlsoLikePlaylists({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingPlaylist, playlist } = usePlaylist(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    playlist?.tracks?.items[0]?.track?.artists[0]?.id,
  );
  const { isLoading: isLoadingRelatedPlaylists, relatedPlaylists } =
    useRelatedPlaylists(artist?.genres?.at(0) || "pop");
  const dispatch = useDispatch();

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    if (all) {
      dispatch(setPageTitle(`You Might Also Like`));
      return () => {
        dispatch(setPageTitle(""));
      };
    }
  }, [all, artist, dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        all={all}
        title="You Might Also Like"
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
