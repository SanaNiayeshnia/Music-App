import PlayButton from "../../PlayButton";
import FollowArtistButton from "../../../features/artists/FollowArtistButton";
import SaveTrackButton from "../../../features/tracks/SaveTrackButton";
import SaveAlbumButton from "../../../features/albums/SaveAlbumButton";
import SavePlaylistButton from "../../../features/playlists/SavePlaylistButton";
import TrackContextMenu from "../../../features/tracks/TrackContextMenu";
import AlbumContextMenu from "../../../features/albums/AlbumContextMenu";
import PlaylistContextMenu from "../../../features/playlists/PlaylistContextMenu";
import ArtistContextMenu from "../../../features/artists/ArtistContextMenu";

function PageMenu({ item }) {
  return (
    <div className="flex items-center justify-between gap-5 md:justify-start">
      {(item?.type !== "playlist" || item?.tracks?.total > 0) && (
        <PlayButton className="order-1 min-h-14 min-w-14 md:-order-1" />
      )}
      <div className="flex items-center gap-5">
        {item?.type === "artist" ? (
          <>
            <FollowArtistButton artist={item} />
            <ArtistContextMenu artist={item} position="right" />
          </>
        ) : item?.type === "track" ? (
          <>
            <SaveTrackButton
              className="min-h-7 min-w-7"
              track={item}
              enabled={true}
            />
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
