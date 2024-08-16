import { getRequestHeader } from "../utilities/helper";

export async function getUser(id) {
  const res = await fetch(`https://api.spotify.com/v1/users/${id}`, {
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to get the user info!");
  const data = await res.json();
  return data;
}
