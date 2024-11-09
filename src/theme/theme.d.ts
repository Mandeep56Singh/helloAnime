declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: false;
  }
  interface genreColors {
    [key: string]: string;
  }
  interface spacing {
    [key:string] : string
  }
}
