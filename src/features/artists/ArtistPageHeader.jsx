import PageTitle from "../../ui/PageTitle";
import PageHeaderWrapper from "../../ui/PageHeaderWrapper";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

function ArtistPageHeader({ artist }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <PageHeaderWrapper background={artist?.images[0]?.url}>
      <div className="flex items-center gap-4 xl:gap-5">
        <img
          className={`relative flex-shrink-0 rounded-full drop-shadow-lg md:h-36 md:w-36 xl:h-48 xl:w-48 ${isPlayingTrackbarOpen ? "md:h-36 md:w-36 lg:h-40 lg:w-40" : "lg:h-48 lg:w-48"}`}
          src={artist?.images[0]?.url}
          alt={artist?.name}
        />
        <div className="space-y-5 px-5">
          {artist?.followers?.total !== null && (
            <p className="flex items-center gap-1 text-sm text-black dark:text-white">
              <TbRosetteDiscountCheckFilled className="min-h-6 min-w-6 text-blue-600 drop-shadow" />
              Verified Artist
            </p>
          )}

          <PageTitle>{artist?.name}</PageTitle>

          <p className="text-black dark:text-white">
            {artist?.followers?.total?.toLocaleString()} followers
          </p>
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default ArtistPageHeader;
