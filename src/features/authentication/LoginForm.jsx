import { useNavigate } from "react-router-dom";
import { CLIENT_ID, REDIRECT_URI } from "../../utilities/constants";
import { useSelector } from "react-redux";

function LoginForm() {
  const RESPONSE_TYPE = "code";
  const navigate = useNavigate();
  const { refreshToken } = useSelector((store) => store.authentication);

  function handleLoginClick() {
    //check if the user has a refresh token, use it to get a new access token, otherwise go to spotify login page to get a code
    if (refreshToken) navigate("/");
    else
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  }

  return (
    <div className="flex min-h-[445px] max-w-[19rem] flex-col items-center justify-center gap-3 rounded-md bg-white/50 p-5 shadow-md lg:max-w-80 dark:bg-black/50">
      <p className="text-center text-3xl font-bold text-black dark:text-white">
        Welcome to Music App!
      </p>
      <img src="/logo.png" alt="" className="h-52 w-52" />
      <p className="text-center text-black dark:text-white">
        {refreshToken
          ? "You've already logged in."
          : "You need to connect to your Spotify account to log in."}
      </p>
      <button
        onClick={handleLoginClick}
        className="rounded-md bg-blue-600 px-3 py-2 text-white shadow-md hover:bg-blue-700 hover:ring hover:ring-blue-100 dark:hover:ring-glass-200"
      >
        {refreshToken ? "Go to the app" : "Connect"}
      </button>
    </div>
  );
}

export default LoginForm;
