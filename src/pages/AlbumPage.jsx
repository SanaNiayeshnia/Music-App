import { useSelector } from "react-redux";
import NavTitle from "../ui/NavTitle";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import License from "../features/albums/License";
import MoreByArtist from "../features/artists/MoreByArtist";
import PageMenu from "../ui/PageMenu";
import PageHeader from "../ui/PageHeader";
import TrackList from "../features/tracks/TrackList";
import useAlbum from "../features/albums/useAlbum";
import { useParams } from "react-router-dom";
import useArtist from "../features/artists/useArtist";
import { useEffect, useState } from "react";
import { formatDate, getTrackDuration } from "../utilities/helper";
import Spinner from "../ui/Spinner";

function AlbumPage() {
  const { isMainScrolled } = useSelector((store) => store.global);
  const { id } = useParams();
  const { isLoading: isLoadingAlbum, album } = useAlbum(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(
    album?.artists[0]?.id,
  );

  return (
    <div className="h-full">
      <TopNav transparent>
        {isMainScrolled && <NavTitle>{album?.name}</NavTitle>}
      </TopNav>
      {isLoadingAlbum || isLoadingArtist ? (
        <div className="grid h-[calc(100%-52px)] place-items-center">
          <Spinner className="h-24 w-24" />
        </div>
      ) : (
        <>
          <PageHeader item={album} artist={artist} />
          <PageBody>
            <PageMenu item={album} />
            <TrackList
              items={album?.tracks?.items}
              noCover
              noAlbum
              extra="stream"
            />
            <License
              release={formatDate(album?.release_date)}
              copyright={album?.copyrights[0]?.text}
              soundRecording={album?.copyrights[1]?.text}
            />
            <MoreByArtist />
          </PageBody>
        </>
      )}
    </div>
  );
}

export default AlbumPage;
