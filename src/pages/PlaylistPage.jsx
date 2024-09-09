import NavTitle from "../ui/layout/topNav/NavTitle";
import PageHeader from "../ui/layout/page/PageHeader";
import TopNav from "../ui/layout/topNav/TopNav";
import PageBody from "../ui/layout/page/PageBody";
import AlsoLikePlaylists from "../features/playlists/AlsoLikePlaylists";
import TrackList from "../features/tracks/TrackList";
import { useParams } from "react-router-dom";
import usePlaylist from "../features/playlists/hooks/usePlaylist";
import Spinner from "../ui/Spinner";
import useUser from "../features/users/hooks/useUser";
import useMainContext from "../ui/layout/main/useMainContext";
import PageMenu from "../ui/layout/page/PageMenu";
import Page from "../ui/layout/page/Page";
import PlaylistItems from "../features/playlists/PlaylistItems";

function PlaylistPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingPlaylist, playlist } = usePlaylist(id);
  const { isLoading: isLoadingOwner, user: owner } = useUser(
    playlist?.owner?.id,
  );

  return (
    <Page>
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
            <PageMenu item={playlist} />
            <PlaylistItems id={id} />
            <AlsoLikePlaylists />
          </PageBody>
        </>
      )}
    </Page>
  );
}

export default PlaylistPage;
