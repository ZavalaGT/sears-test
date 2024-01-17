import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import projectColors from "../../core/theme/projectColors";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box width={"100%"}>
      <Header />
      <Box width={"100%"} minHeight={{ xs: "93vh", md: "93.5vh" }}>
        <Box minHeight={60} id={"init"} bgcolor={projectColors.primary.main} />
        <Box component={"main"}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
