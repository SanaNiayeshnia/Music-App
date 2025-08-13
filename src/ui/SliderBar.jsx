import { Slider } from "@mui/material";
import { useSelector } from "react-redux";

function SliderBar({
  valueLabelDisplay = "auto",
  thumbDisplay = "on",
  step = 1,
  disabled = false,
  max = 100,
  value,
  defaultValue = 0,
  onChange = () => {},
  onChangeCommitted,
}) {
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <Slider
      size="medium"
      defaultValue={defaultValue}
      aria-label="medium"
      valueLabelDisplay={valueLabelDisplay}
      step={step}
      disabled={disabled}
      value={value}
      max={max}
      onChangeCommitted={(e, value) => onChangeCommitted(value)}
      onChange={(e, value) => {
        onChange(value);
      }}
      sx={{
        "& .MuiSlider-thumb": {
          width: 15,
          height: 15,
          boxShadow: "none",
          transition: "all 0.3s ease",
          opacity: thumbDisplay === "off" && 0,
        },
        "& .MuiSlider-thumb:focus, & .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-active":
          {
            boxShadow: "0px 0px 4px 0px #2564eb8c",
            opacity: thumbDisplay === "off" && 1,
          },
        "& .MuiSlider-rail": {
          opacity: 0.6,
          backgroundColor: isDarkMode ? "#ffffff" : "#60a5fa",
        },
      }}
    />
  );
}

export default SliderBar;
