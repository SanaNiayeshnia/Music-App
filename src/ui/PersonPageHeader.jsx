import PageTitle from "./PageTitle";
import PageHeaderWrapper from "./PageHeaderWrapper";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useState } from "react";
import Skeleton from "./Skeleton";
import UserAvatar from "../features/users/UserAvatar";

function PersonPageHeader({ person }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <PageHeaderWrapper background={person?.images[0]?.url}>
      <div className="flex items-center gap-4 xl:gap-5">
        {person?.images?.length > 0 && !isImageLoaded && (
          <Skeleton
            className={`relative flex-shrink-0 rounded-full drop-shadow-lg md:h-36 md:w-36 xl:h-48 xl:w-48 ${isPlayingTrackbarOpen ? "md:h-36 md:w-36 lg:h-40 lg:w-40" : "lg:h-48 lg:w-48"}`}
          />
        )}
        <img
          className={`${!isImageLoaded && "hidden"} relative flex-shrink-0 rounded-full drop-shadow-lg md:h-36 md:w-36 xl:h-48 xl:w-48 ${isPlayingTrackbarOpen ? "md:h-36 md:w-36 lg:h-40 lg:w-40" : "lg:h-48 lg:w-48"}`}
          src={person?.images[0]?.url}
          alt={person?.type === "artist" ? person?.name : person?.display_name}
          onLoad={() => setIsImageLoaded(true)}
        />
        {person?.images?.length === 0 && <UserAvatar size="large" />}
        <div className="space-y-5 px-5">
          <p className="flex items-center gap-1 text-sm text-black dark:text-white">
            {person?.type === "artist" && person?.followers?.total !== null && (
              <>
                <TbRosetteDiscountCheckFilled className="min-h-6 min-w-6 text-blue-600 drop-shadow" />
                Verified Artist
              </>
            )}
            {person?.type === "user" && <>Profile</>}
          </p>

          <PageTitle>
            {person?.type === "artist" ? person?.name : person?.display_name}
          </PageTitle>

          <p className="text-black dark:text-white">
            {person?.followers?.total?.toLocaleString()} followers
          </p>
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default PersonPageHeader;
