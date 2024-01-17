import { Box, Container } from "@mui/material";
import projectColors from "../../../core/theme/projectColors";

function Header() {
  return (
    <Box
      position={"fixed"}
      width={"100%"}
      minHeight={45}
      bgcolor={projectColors.primary.main}
      sx={{
        borderBottom: `4px solid ${projectColors.secondary.main}`,
      }}
    >
      <Container sx={{ py: 1 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <a href="#">
            <img
              alt="sochi.ru-logo"
              src="/src/assets/icons/logo-sochi.png"
              width={"auto"}
              height={"40px"}
            />
          </a>
          <a href="#">
            <img
              alt="claro-sports-logo"
              src="/src/assets/icons/logo-claro-sports.png"
              width={"auto"}
              height={"40px"}
            />
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
