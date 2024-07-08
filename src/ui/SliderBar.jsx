import { Slider } from "@mui/material";

function SliderBar({
  valueLabelDisplay = "auto",
  thumbDisplay = "on",
  step = "1",
}) {
  return (
    <Slider
      size="medium"
      defaultValue={70}
      aria-label="medium"
      valueLabelDisplay={valueLabelDisplay}
      step={step}
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
      }}
    />
  );
}

export default SliderBar;
