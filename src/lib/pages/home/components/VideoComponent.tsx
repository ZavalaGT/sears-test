import { Box, Container, Grid } from "@mui/material";
import { useAppSelector } from "../../../../core/redux/store";

function VideoComponent() {
  const video = useAppSelector((state) => state.video);
  return (
    <Container sx={{ pb: 4 }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={10} md={8}>
          <Box width={"100%"}>
            <iframe
              src={`https://www.youtube.com/embed/${video.videoSrc}?rel=0&showinfo=0&autoplay=1`}
              style={{ width: "100%", height: "45vh" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoComponent;
