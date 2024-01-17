import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import projectColors from "./projectColors";

const defaultTheme = createTheme({
  palette: {
    ...projectColors,
  },
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

let theme = createTheme({
  palette: { ...defaultTheme.palette },
});

theme = responsiveFontSizes(theme);

export default theme;
