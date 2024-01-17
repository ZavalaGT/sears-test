import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box width={"100%"}>
      <Header />
      <Box width={"100%"} minHeight={{ xs: "93vh", md: "93.5vh" }}>
        <Box minHeight={45} id={"perfil"} />
        <Box component={"main"} py={1}>
          <Container>{children}</Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
