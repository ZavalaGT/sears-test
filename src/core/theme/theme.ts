import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import projectColors from "./projectColors";

const defaultTheme = createTheme({
  palette: {
    ...projectColors,
  },
});

let theme = createTheme({
  palette: { ...defaultTheme.palette },
  typography: {
    fontFamily: [
      "Exo",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
