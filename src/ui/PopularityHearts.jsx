import { Tooltip } from "@mui/material";
import { BsHeart, BsHeartFill, BsHeartHalf } from "react-icons/bs";

function PopularityHearts({ popularity }) {
  const popularityFilledHeartsCount =
    Math.floor(popularity / 20) + (popularity % 20 >= 15 ? 1 : 0);
  const popularityHalfHeartsCount =
    popularity % 20 >= 10 && popularity % 20 < 15 ? 1 : 0;
  const popularityEmptyHeartsCount =
    5 - (popularityFilledHeartsCount + popularityHalfHeartsCount);

  return (
    <div className="z-50">
      <Tooltip
        title={`popularity: ${popularity}%`}
        placement="left"
        PopperProps={{ disablePortal: true }}
      >
        <div className="absolute bottom-4 right-4 flex items-center justify-end gap-1">
          {Array.from({
            length: popularityFilledHeartsCount,
          }).map((heart, index) => (
            <BsHeartFill key={index} className="text-white drop-shadow" />
          ))}
          {Array.from({
            length: popularityHalfHeartsCount,
          }).map((heart, index) => (
            <BsHeartHalf key={index} className="text-white drop-shadow" />
          ))}
          {Array.from({
            length: popularityEmptyHeartsCount,
          }).map((heart, index) => (
            <BsHeart key={index} className="text-white drop-shadow" />
          ))}
        </div>
      </Tooltip>
    </div>
  );
}

export default PopularityHearts;
