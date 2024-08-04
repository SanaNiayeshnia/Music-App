import { useNavigate } from "react-router-dom";
import { APP_NAME, CLIENT_ID, REDIRECT_URI } from "../../utilities/constants";
import { useSelector } from "react-redux";
import Logo from "../../ui/Logo";

function LoginForm() {
  const RESPONSE_TYPE = "code";
  const scope =
    "user-follow-read user-library-read playlist-read-private user-read-recently-played user-read-playback-state user-read-currently-playing ";
  const navigate = useNavigate();
  const { refreshToken } = useSelector((store) => store.authentication);

  function handleLoginClick() {
    //check if the user has a refresh token, use it to get a new access token, otherwise go to spotify login page to get a code
    if (refreshToken) navigate("/");
    else
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scope}`;
  }

  return (
    <div className="max-w-96 space-y-8 rounded-lg bg-white/50 px-8 py-5 text-center shadow-md md:max-w-[650px] md:space-y-10 md:p-10 dark:bg-black/50">
      <p className="flex flex-col justify-center text-center text-3xl font-bold text-black md:mb-10 md:flex-row md:gap-2 dark:text-white">
        <span>Welcome to</span>
        <span>{APP_NAME}!</span>
      </p>
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <Logo />
        <div className="space-y-5 text-center">
          <p className="text-justify text-black dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            officia? Dignissimos accusamus architecto, facere rem natus aliquam
            nostrum ab explicabo reiciendis at corrupti earum ex nam possimus
            perferendis
          </p>
        </div>
      </div>
      <div className="space-y-3 text-center">
        <div className="text-center text-sm text-black dark:text-white">
          {refreshToken ? (
            <p>You've already logged in.</p>
          ) : (
            <p className="flex flex-col items-center">
              <span>You need to connect to</span>
              <span>your Spotify account to log in.</span>
            </p>
          )}
        </div>
        <button
          onClick={handleLoginClick}
          className="dark:hover:ring-glass-200 rounded-md bg-blue-600 px-3 py-2 text-white shadow-md hover:bg-blue-700 hover:ring hover:ring-blue-100"
        >
          {refreshToken ? "Go to the app" : "Connect"}
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
