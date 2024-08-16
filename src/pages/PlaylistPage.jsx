import NavTitle from "../ui/NavTitle";
import PageHeader from "../ui/PageHeader";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import AlsoLikePlaylists from "../features/playlists/AlsoLikePlaylists";
import TrackList from "../features/tracks/TrackList";
import { useParams } from "react-router-dom";
import usePlaylist from "../features/playlists/usePlaylist";
import Spinner from "../ui/Spinner";
import useUser from "../features/users/useUser";
import PlaylistPageMenu from "../features/playlists/PlaylistPageMenu";
import useMainContext from "../ui/layout/useMainContext";

function PlaylistPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingPlaylist, playlist } = usePlaylist(id);
  const { isLoading: isLoadingOwner, user: owner } = useUser(
    playlist?.owner?.id,
  );

  return (
    <div className="h-full">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>{playlist?.name}</NavTitle>}
      </TopNav>
      {isLoadingPlaylist || isLoadingOwner ? (
        <div className="grid h-[calc(100%-52px)] place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PageHeader item={playlist} artist={owner} />
          <PageBody>
            <PlaylistPageMenu playlist={playlist} />
            <TrackList
              all={true}
              items={playlist?.tracks?.items?.map((item) => item?.track)}
            />
            <AlsoLikePlaylists />
          </PageBody>
        </>
      )}
    </div>
  );
}

export default PlaylistPage;
