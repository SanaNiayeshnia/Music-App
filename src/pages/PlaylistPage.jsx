import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import PageHeader from "../ui/PageHeader";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import PageMenu from "../ui/PageMenu";
import AlsoLikePlaylists from "../features/playlists/AlsoLikePlaylists";
import TrackList from "../features/tracks/TrackList";
import { useParams } from "react-router-dom";
import usePlaylist from "../features/playlists/usePlaylist";
import Spinner from "../ui/Spinner";
import useUser from "../features/users/useUser";

function PlaylistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
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
            <PageMenu item={playlist} />
            <TrackList
              items={playlist?.tracks?.items?.map((item) => item?.track)}
              extra="date"
            />
            <AlsoLikePlaylists />
          </PageBody>
        </>
      )}
    </div>
  );
}

export default PlaylistPage;
