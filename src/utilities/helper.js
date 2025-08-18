import toast from "react-hot-toast";

export function getRequestHeader() {
  const accessToken = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_APP_NAME),
  ).spotifyAccessToken;
  return {
    authorization: `Bearer ${accessToken}`,
  };
}

export function getTrackDuration(duration) {
  const hour = Math.floor(duration / 1000 / 60 / 60);
  const min = Math.floor(duration / 1000 / 60) % 60;
  const sec = Math.floor((duration / 1000) % 60);
  return { hour, min, sec };
}

export function formatTrackDuration(duration) {
  const minutes = getTrackDuration(duration).min.toString();
  const seconds = getTrackDuration(duration).sec.toString().padStart(2, "0");
  const formattedDuration = `${minutes}:${seconds}`;
  return formattedDuration;
}

export function formatDate(date = new Date()) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(new Date(date));
  return formattedDate;
}

export function copyLink(item) {
  navigator.clipboard.writeText(
    `${import.meta.env.VITE_REDIRECT_URI}/${item.type}/${item.id}`,
  );
  toast("Link copied to clipboard");
}
