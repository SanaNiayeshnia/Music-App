import Skeleton from "../../ui/Skeleton";
import UserContextMenu from "./UserContextMenu";
import useCurrentUser from "./useCurrentUser";
import { useSelector } from "react-redux";

function UserAvatar({ size }) {
  const { isLoading, user } = useCurrentUser();
  const firstLetterOfUserName = user?.display_name?.slice(0, 1) || "";
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const content = (
    <div
      className={`${size == "large" ? `relative h-48 w-48 flex-shrink-0 rounded-full drop-shadow-lg md:h-36 md:w-36 xl:h-48 xl:w-48 ${isPlayingTrackbarOpen ? "md:h-36 md:w-36 lg:h-40 lg:w-40" : "lg:h-48 lg:w-48"}` : "h-9 w-9 cursor-pointer"} overflow-hidden rounded-full border-4 border-blue-600 shadow-md`}
    >
      {isLoading ? (
        <Skeleton className="size-full" />
      ) : (
        <>
          {/*show the first letter of username when there is no image*/}
          {user?.images?.length > 0 ? (
            <img
              className="size-full"
              src={user.images[0].url}
              alt={user.display_name}
            />
          ) : (
            <div
              className={`${size === "large" && "text-4xl"} grid size-full place-items-center bg-white font-semibold text-blue-600`}
            >
              <span>{firstLetterOfUserName}</span>
            </div>
          )}
        </>
      )}
    </div>
  );

  return size === "large" ? (
    content
  ) : (
    <UserContextMenu>{content}</UserContextMenu>
  );
}

export default UserAvatar;
