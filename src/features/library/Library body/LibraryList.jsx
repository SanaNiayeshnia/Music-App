import { useSelector } from "react-redux";
import useScrollbar from "../../../hooks/useScrollbar";
import Item from "../../../ui/Item";
import useFollowedArtists from "../../artists/useFollowedArtists";
import useSavedAlbums from "../../albums/useSavedAlbums";
import { useEffect, useState } from "react";
import useSavedPlaylists from "../../playlists/useSavedPlaylists";

function LibraryList() {
  const ref = useScrollbar();
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isLoading: isLoadingArtists, followedArtists } = useFollowedArtists();
  const { isLoading: isLoadingAlbums, savedAlbums } = useSavedAlbums();
  const { isLoading: isLoadingPlaylists, savedPlaylists } = useSavedPlaylists();
  const [followedItems, setFollowedItems] = useState([]);

  return (
    <div
      className={`${isPlayingTrackbarOpen && "md:justify-center"} scrollbar hide-scroll h-full overflow-auto pb-3 pl-3 pr-2`}
      ref={ref}
    >
      {isLoadingArtists || isLoadingAlbums ? (
        Array.from({ length: 6 }).map(() => {
          return <Item key={Math.random()} isLoading={true} size="small" />;
        })
      ) : (
        <>
          {followedArtists?.map((artist) => (
            <Item key={artist.id} item={artist} size="small" />
          ))}
          {savedAlbums?.map((album) => (
            <Item key={album.id} item={album} size="small" />
          ))}
          {savedPlaylists?.map((playlist) => (
            <Item key={playlist.id} item={playlist} size="small" />
          ))}
        </>
      )}
    </div>
  );
}

export default LibraryList;
