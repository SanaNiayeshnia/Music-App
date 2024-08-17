import PlayButton from "./PlayButton";
import FollowArtistButton from "../features/artists/FollowArtistButton";
import SaveTrackButton from "../features/tracks/SaveTrackButton";
import SaveAlbumButton from "../features/albums/SaveAlbumButton";
import SavePlaylistButton from "../features/playlists/SavePlaylistButton";
import TrackContextMenu from "../features/tracks/TrackContextMenu";
import AlbumContextMenu from "../features/albums/AlbumContextMenu";
import PlaylistContextMenu from "../features/playlists/PlaylistContextMenu";

function PageMenu({ item }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <PlayButton className="min-h-14 min-w-14" />
        {item?.type === "artist" ? (
          <FollowArtistButton artist={item} />
        ) : item?.type === "track" ? (
          <>
            <SaveTrackButton className="min-h-7 min-w-7" track={item} />
            <TrackContextMenu position="right" track={item} />
          </>
        ) : item?.type === "album" ? (
          <>
            <SaveAlbumButton album={item} />
            <AlbumContextMenu album={item} position="right" />
          </>
        ) : item?.type === "playlist" && item.id !== "LikedSongs" ? (
          <>
            <SavePlaylistButton playlist={item} />
            <PlaylistContextMenu playlist={item} position="right" />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PageMenu;
