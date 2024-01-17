import { Box, Container, Grid, Typography } from "@mui/material";

interface RoundedTimerProps {
  time: number;
  title: string;
}

const RoundedTimer = ({ title, time }: RoundedTimerProps) => {
  return (
    <>
      <Box
        width={"100"}
        border={"2px solid black"}
        borderRadius={"50%"}
        sx={{ aspectRatio: "1/1" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            {time < 10 ? "0" : ""}
            {time}
          </Typography>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            {title.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

function Clock() {
  return (
    <>
      <Container>
        <Typography
          component={"h1"}
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={"white"}
        >
          Faltan
        </Typography>
        <Grid container justifyContent={"center"} columnSpacing={2}>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={0} title="días" />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={0} title="HRS" />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={0} title="MIN." />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={0} title="seg" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Clock;
