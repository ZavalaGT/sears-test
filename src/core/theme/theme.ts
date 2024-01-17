import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import projectColors from "./projectColors";

const defaultTheme = createTheme({
  palette: {
    ...projectColors,
  },
});

let theme = createTheme({
  palette: { ...defaultTheme.palette },
});

theme = responsiveFontSizes(theme);

export default theme;
