import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2D2B44",
      // light: "#2B2A3C",
      // dark: "#191826",
      // contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFBADE",
      light: "#FFF",
      contrastText: "#000",
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

  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ["Poppins", "Robots", "sans-serif"].join(","),
    // Header sizes (h1-h6)
    h1: {
      fontSize: "3rem", // 48px
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem", // 40px
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem", // 32px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.75rem", // 28px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
      lineHeight: 1.5,
    },

    // Body text
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: 1.6,
    },

    // Subtitle text
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      lineHeight: 1.75,
    },

    // Captions and Overlines
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: "0.75rem", // 12px
      fontWeight: 700,
      letterSpacing: "1.5px",
      lineHeight: 2.66,
      textTransform: "uppercase",
    },

    // Button text
    button: {
      fontSize: "0.875rem", // 14px
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 1.75,
    },
  },
});
