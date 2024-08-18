import { useNavigate } from "react-router-dom";
import { formatTrackDuration, getTrackDuration } from "../utilities/helper";
import Cover from "./Cover";
import HeaderType from "./HeaderType";
import PageHeaderWrapper from "./PageHeaderWrapper";
import PageTitle from "./PageTitle";
import { Tooltip } from "@mui/material";

function PageHeader({ item, artist }) {
  const navigate = useNavigate();
  const type = item?.type;
  const background =
    type !== "playlist"
      ? artist?.images?.at(0)?.url
      : item?.tracks?.items[0]?.track?.album?.images?.at(0)?.url;
  const title = item?.name;
  const cover =
    type !== "track"
      ? item?.images?.at(0)?.url
      : item?.album?.images?.at(0)?.url;
  const artistPic = artist?.images?.at(0)?.url;
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
        •{" "}
        <Tooltip title="Album" placement="bottom">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate(`/album/${item?.album?.id}`)}
          >
            {item?.album?.name}
          </span>
        </Tooltip>{" "}
        • {item?.album?.release_date.slice(0, 4)} •{" "}
        {formatTrackDuration(item?.duration_ms)}
      </>
    ) : type === "playlist" ? (
      <>
        •{" "}
        {item?.id !== "LikedSongs"
          ? item?.followers?.total?.toLocaleString() + " saves • "
          : ""}
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
              <Tooltip
                title={type === "playlist" ? "Owner" : "Artist"}
                placement="bottom"
              >
                <span
                  onClick={() =>
                    type !== "playlist" && navigate(`/artist/${artist?.id}`)
                  }
                  className={`${type !== "playlist" && "cursor-pointer hover:underline"} font-semibold text-gray-900 dark:text-white`}
                >
                  {type === "playlist" ? artist?.display_name : artist?.name}
                </span>
              </Tooltip>{" "}
              {info}
            </p>
          </div>
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default PageHeader;
