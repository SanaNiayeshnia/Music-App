import { TbMoodSad } from "react-icons/tb";
import useUser from "../../../features/authentication/useUser";

function TrackBarError() {
  const { user } = useUser();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-2">
      <p className="flex items-center gap-1 font-semibold text-black dark:text-white">
        Unable to load the queue
        <TbMoodSad className="h-5 w-5 text-blue-600 duration-100" />
      </p>
      <div className="text-center text-sm font-medium">
        {user.product === "premium" ? (
          <p className="text-black dark:text-white">Start by playing a song.</p>
        ) : (
          <p className="text-black dark:text-white">
            You should have a Spotify{" "}
            <a
              className="text-blue-600 hover:underline"
              target="_blank "
              href="https://www.spotify.com/us/premium/?ref=web_loggedin_upgrade_menu"
            >
              premium account{" "}
            </a>
            to be able to play a song!
          </p>
        )}
      </div>
    </div>
  );
}

export default TrackBarError;
