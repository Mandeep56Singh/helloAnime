import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2D2B44",
      light: "#2B2A3C",
      dark: "#191826",
      contrastText:"#FFFFFF"
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#2D2B44",
      paper: "#999999",
    },
    text: {
      primary: "#fff",
      secondary: "#FFBADE",
      disabled: "#AAAAAA",
    },
    action: {
      hover: "#FFBADE",
    },
  },

  typography: {
    fontFamily: ["Poppins", "Robots", "sans-serif"].join(","),
  },
});
