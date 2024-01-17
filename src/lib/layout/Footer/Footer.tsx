import { Box, Container, Grid, Typography } from "@mui/material";
import projectColors from "../../../core/theme/projectColors";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <Box
      width={"100%"}
      minHeight={45}
      bgcolor={projectColors.primary.main}
      sx={{
        borderTop: `3px solid ${projectColors.primary.light}`,
      }}
    >
      <Container sx={{ py: 1 }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              height={"100%"}
              display={"flex"}
              justifyContent={{ xs: "center", md: "start" }}
              alignItems={"center"}
            >
              <Typography
                variant="caption"
                component={"p"}
                color={"white"}
                sx={{ cursor: "pointer" }}
              >
                Aviso de privacidad / Contacto
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display={"flex"} justifyContent={"center"}>
              <a href="#">
                <img
                  alt="sochi.ru-logo"
                  src="/src/assets/icons/logo-sochi.png"
                  width={"auto"}
                  height={"40px"}
                />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              height={"100%"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              alignContent={"center"}
            >
              <Grid container justifyContent={"end"}>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={{ xs: "center", md: "end" }}
                  alignItems={"center"}
                >
                  <Grid
                    container
                    justifyContent={{ xs: "center", md: "end" }}
                    spacing={1}
                  >
                    <Grid item>
                      <Box
                        bgcolor={"#6AAAF2"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"0.2rem"}
                        sx={{
                          aspectRatio: "1/1",
                          cursor: "pointer",
                          padding: "1px 1px",
                        }}
                      >
                        <img
                          alt="social-media"
                          src="/src/assets/icons/mobli-icon.png"
                          width={"90%"}
                          height={"auto"}
                          style={{ margin: "3px 3px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        bgcolor={"#57ABF4"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"0.2rem"}
                        sx={{
                          aspectRatio: "1/1",
                          cursor: "pointer",
                          padding: "2px 2px",
                        }}
                      >
                        <TwitterIcon style={{ color: "white" }} />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        bgcolor={"#3A599C"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"0.2rem"}
                        sx={{
                          aspectRatio: "1/1",
                          cursor: "pointer",
                          padding: "2px 2px",
                        }}
                      >
                        <FacebookIcon style={{ color: "white" }} />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        bgcolor={"#A22A1F"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"0.2rem"}
                        sx={{
                          aspectRatio: "1/1",
                          cursor: "pointer",
                          padding: "2px 2px",
                        }}
                      >
                        <YouTubeIcon style={{ color: "white" }} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
