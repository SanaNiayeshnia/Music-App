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
import { getTrackDuration } from "../utilities/helper";
import Spinner from "../ui/Spinner";

function PlaylistPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  const { id } = useParams();
  const { isLoading, playlist } = usePlaylist(id);
  const totalDuration = playlist?.tracks?.items?.reduce(
    (totalDuration, item) => totalDuration + item?.track?.duration_ms,
    0,
  );
  const { hour, min, sec } = getTrackDuration(totalDuration);
  return (
    <div className="h-full">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>{playlist?.name}</NavTitle>}
      </TopNav>
      {isLoading ? (
        <div className="grid h-[calc(100%-52px)] place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          {" "}
          <PageHeader
            background={
              playlist?.tracks?.items[0]?.track?.album?.images[0]?.url
            }
            artistPic="/spotify-logo.png"
            cover={playlist?.images[0]?.url}
            type={playlist?.type}
            title={playlist?.name}
            something={
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {playlist?.owner?.display_name}
                </span>{" "}
                • {playlist?.followers?.total?.toLocaleString()} saves •{" "}
                {playlist?.tracks?.total} songs, {hour > 0 && hour + " hr"}{" "}
                {min > 0 && min + " min"} {sec > 0 && sec + " sec"}
              </p>
            }
          />
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
