import { formatTrackDuration, getTrackDuration } from "../utilities/helper";
import Cover from "./Cover";
import HeaderType from "./HeaderType";
import PageHeaderWrapper from "./PageHeaderWrapper";
import PageTitle from "./PageTitle";

function PageHeader({ item, artist }) {
  const type = item?.type;
  const background =
    type !== "playlist"
      ? artist?.images[0]?.url
      : item?.tracks?.items[0]?.track?.album?.images[0]?.url;
  const title = item?.name;
  const cover =
    type !== "track" ? item?.images[0]?.url : item?.album?.images[0]?.url;
  const artistPic = artist?.images[0]?.url;
  const totalDuration = item?.tracks?.items?.reduce(
    (totalDuration, item) =>
      totalDuration +
      (type === "playlist" ? item?.track?.duration_ms : item?.duration_ms),
    0,
  );
  const { hour, min, sec } = getTrackDuration(totalDuration);

  const info =
    type === "album" ? (
      <>
        • {item?.release_date.slice(0, 4)} • {item?.total_tracks} songs,{" "}
        {hour > 0 && hour + " hr"} {min > 0 && min + " min"}{" "}
        {sec > 0 && sec + " sec"}
      </>
    ) : type === "track" ? (
      <>
        <span className="font-semibold text-gray-900 dark:text-white">
          {artist?.name}
        </span>{" "}
        • {item?.album?.release_date.slice(0, 4)} •{" "}
        {formatTrackDuration(item?.duration_ms)}
      </>
    ) : type === "playlist" ? (
      <>
        • {item?.followers?.total?.toLocaleString()} saves •{" "}
        {item?.tracks?.total} songs, {hour > 0 && hour + " hr"}{" "}
        {min > 0 && min + " min"} {sec > 0 && sec + " sec"}
      </>
    ) : (
      ""
    );
  return (
    <PageHeaderWrapper background={background}>
      <div className="flex items-center gap-4 xl:gap-5">
        <Cover cover={cover} title={title} />
        <div className={`flex-grow space-y-3 lg:space-y-4`}>
          <HeaderType>{type}</HeaderType>
          <PageTitle>{title}</PageTitle>
          <div className="flex items-center gap-1">
            {artistPic && (
              <img
                src={artistPic}
                alt={title}
                className="h-6 w-6 rounded-full drop-shadow"
              />
            )}

            <p className="text-sm font-medium text-gray-900 dark:text-white">
              <span className="font-semibold text-gray-900 dark:text-white">
                {type === "playlist" ? artist?.display_name : artist?.name}
              </span>{" "}
              {info}
            </p>
          </div>
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default PageHeader;
