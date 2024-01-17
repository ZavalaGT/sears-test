import { Box } from "@mui/material";
import VideoComponent from "./components/VideoComponent";
import Clock from "./components/ClockReminder";
import VideoSelector from "./components/VideoSelector";

function HomePage() {
  return (
    <Box>
      <Box
        component={"section"}
        id="reminder-time"
        minHeight={"70vh"}
        sx={{
          backgroundColor: "red",
          backgroundImage: "url(src/assets/images/background.jpg)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          minHeight={"15vh"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Clock />
        </Box>
        <Box
          minHeight={"50vh"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <VideoComponent />
        </Box>
      </Box>
      <Box component={"section"} id="video-selector" minHeight={"20vh"}>
        <Box
          minHeight={"20vh"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <VideoSelector />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
