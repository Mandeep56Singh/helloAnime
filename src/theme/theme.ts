import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    genreColors: {
      lightGreen: string;
      pink: string;
      orange: string;
      lightPurple: string;
      lightBlue: string;
      purple: string;
      green: string;
      teal: string;
      purplePink: string;
      red: string;
      yellowGreen: string;
      orangeRed: string;
      pinkishRed: string;
    };
    spacing: {
      textPadding: string;
    };
  }
  interface PaletteOptions {
    genreColors: {
      lightGreen: string;
      pink: string;
      orange: string;
      lightPurple: string;
      lightBlue: string;
      purple: string;
      green: string;
      teal: string;
      purplePink: string;
      red: string;
      yellowGreen: string;
      orangeRed: string;
      pinkishRed: string;
    };
    spacing: {
      textPadding: string;
    };
  }
  interface TypeBackground {
    transparent: string;
  }
  interface TypeText {
    dark: {
      primary: string;
    };
  }
}

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#2D2B44",
        light: "#2B2A3C",
        dark: "#191826",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#FFBADE",
        light: "#FFF",
        contrastText: "#000",
      },

      background: {
        default: "#2D2B44",
        paper: "#999999",
        transparent: "rgba(255,255,255,.1)",
      },
      spacing: {
        textPadding: "4px 8px",
      },
      text: {
        primary: "#fff",
        secondary: "#FFBADE",
        disabled: "#AAAAAA",
        dark: {
          primary: "#000",
        },
      },

      action: {
        hover: "#FFBADE",
      },
      genreColors: {
        lightGreen: "#A8E6CF",
        pink: "#FF8B94",
        orange: "#FFA726",
        lightPurple: "#D1C4E9",
        lightBlue: "#81D4FA",
        purple: "#B39DDB",
        green: "#4CAF50",
        teal: "#4DD0E1",
        purplePink: "#F48FB1",
        red: "#E57373",
        yellowGreen: "#DCE775",
        orangeRed: "#FF7043",
        pinkishRed: "#FF5252",
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
    breakpoints: {
      values: {
        xs: 0,
        sm: 479,
        md: 759,
        lg: 1023,
        xl: 1300,
      },
    },
    components: {
      MuiSkeleton: {
        defaultProps: {
          animation: "pulse",
        },
        styleOverrides: {},
      },
    },
  })
);
