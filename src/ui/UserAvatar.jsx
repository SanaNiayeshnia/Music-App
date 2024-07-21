import useUser from "../features/authentication/useUser";
import Skeleton from "./Skeleton";

function UserAvatar() {
  const { isLoading, user } = useUser();
  const firstLetterOfUserName = user?.display_name?.slice(0, 1);
  return (
    <div className="h-9 w-9 overflow-hidden rounded-full border-4 border-blue-600 shadow-md">
      {isLoading ? (
        <Skeleton className="size-full" />
      ) : (
        <>
          {/*show the first letter of username when there is no image*/}
          {user.images.length > 0 ? (
            <img
              className="size-full"
              src={user.images[0].url}
              alt={user.display_name}
            />
          ) : (
            <div className="grid size-full place-items-center bg-white font-semibold text-blue-600">
              <span>{firstLetterOfUserName}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default UserAvatar;
