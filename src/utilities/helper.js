export function formatTrackDuration(duration) {
  const minutes = parseInt(duration / 1000 / 60).toString();
  const seconds = parseInt((duration / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const formattedDuration = `${minutes}:${seconds}`;
  return formattedDuration;
}

export function formatName(name, length = 25) {
  //if the name length was more than 25 char, cut it and add "..."
  const formattedName =
    name?.length > length
      ? name
          ?.slice(0, length)
          .split(" ")
          .slice(0, name?.slice(0, length)?.split(" ")?.length - 1)
          .join(" ") + "..."
      : name;
  return formattedName;
}

export function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(new Date(date));
  return formattedDate;
}
