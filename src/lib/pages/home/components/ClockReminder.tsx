import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface RoundedTimerProps {
  time: number;
  title: string;
}

const RoundedTimer = ({ title, time }: RoundedTimerProps) => {
  return (
    <>
      <Box
        width={"100"}
        border={"2px solid white"}
        borderRadius={"50%"}
        sx={{ aspectRatio: "1/1" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Typography fontWeight={"bold"} textAlign={"center"} color={"white"}>
            {time < 10 ? "0" : ""}
            {time}
          </Typography>
          <Typography fontWeight={"bold"} textAlign={"center"} color={"white"}>
            {title.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

function Clock() {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(3);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2024 0:0:0");

    const interval = setInterval(() => {
      const today = new Date();

      const difference = target.getTime() - today.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      setDays(d);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container sx={{ mb: 3, pt: 3 }}>
        <Typography
          component={"h1"}
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={"white"}
          mb={3}
        >
          FALTAN
        </Typography>
        <Grid container justifyContent={"center"} columnSpacing={2}>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={days} title="días" />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={hours} title="HRS" />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={minutes} title="MIN." />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <RoundedTimer time={seconds} title="seg" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Clock;
