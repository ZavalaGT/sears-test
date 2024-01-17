import { Box, Container, Grid, Typography } from "@mui/material";
import projectColors from "../../../../core/theme/projectColors";
import VideoItemSelect from "./VideoItemSelect";

function VideoSelector() {
  return (
    <Box
      width={"100%"}
      bgcolor={projectColors.primary.dark}
      minHeight={"20vh"}
      py={3}
    >
      <Container>
        <Typography
          component={"h2"}
          variant="h4"
          textAlign={"center"}
          color={"white"}
          mb={3}
        >
          CLARO SPORTS EN SOCHI 2014
        </Typography>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          justifyContent={"center"}
        >
          <Grid item xs={6} md={2}>
            <VideoItemSelect
              title="Team latam"
              imageSrc="/src/assets/images/team-latam.png"
              videoSrc="2uZjsHFob5s"
              descriptionText="Los Deporttistas latinoamericanos que participan en sochi 2014"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <VideoItemSelect
              title="Travel meets fashon"
              imageSrc="/src/assets/images/travel-meets-fashion.png"
              videoSrc="GAcq61I9IVM"
              descriptionText="Un texto diferente para saber que funciona"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <VideoItemSelect
              title="velocidad y riesgo"
              imageSrc="/src/assets/images/velocidad-riesgo.png"
              videoSrc="nKPbfIU442g"
              descriptionText="estes es otro tipo de texto editable"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <VideoItemSelect
              title="experiencia multimedia"
              imageSrc="/src/assets/images/experiencia.png"
              videoSrc="5Zg_5DqumB8"
              descriptionText="Un video más con su descripción diferente"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default VideoSelector;
