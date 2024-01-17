import { Box, Typography } from "@mui/material";
import { useState } from "react";
import projectColors from "../../../../core/theme/projectColors";
import { useAppDispatch } from "../../../../core/redux/store";
import { setVideo } from "../../../../core/redux/feutures/video/videoSlice";

interface VideoItemSelectProps {
  imageSrc: string;
  title: string;
  videoSrc: string;
  descriptionText: string;
}

function VideoItemSelect({
  title,
  imageSrc,
  videoSrc,
  descriptionText,
}: VideoItemSelectProps) {
  const dispatch = useAppDispatch();
  const [isHover, setHover] = useState(false);
  const handleClick = () => {
    console.log({ videoSrc, descriptionText });
    dispatch(setVideo(videoSrc));
  };

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };
  return (
    <Box
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      width={"100%"}
    >
      {isHover ? (
        <Box
          width={"100%"}
          height={"100%"}
          borderRadius={"50%"}
          bgcolor={projectColors.secondary.main}
          sx={{ aspectRatio: "1/1", cursor: "pointer" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box width={"80%"}>
            <Typography
              mt={1}
              textAlign={"center"}
              component={"p"}
              variant="caption"
              color={"white"}
            >
              {descriptionText}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ aspectRatio: "1/1", cursor: "pointer" }}>
          <img
            alt={`claro-sports-${title}`}
            src={imageSrc}
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      <Box>
        <Typography
          mt={1}
          textAlign={"center"}
          component={"p"}
          variant="body2"
          color={"white"}
        >
          {title.toLocaleUpperCase()}
        </Typography>
      </Box>
    </Box>
  );
}

export default VideoItemSelect;
