import { createTheme } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    common: {
      line: React.CSSProperties["color"];
      inputBackground: React.CSSProperties["color"];
      adminElement: React.CSSProperties["color"];
      background: React.CSSProperties["color"];
      adminBackground: React.CSSProperties["color"];
      offWhite: React.CSSProperties["color"];
      placeholder: React.CSSProperties["color"];
      label: React.CSSProperties["color"];
      body: React.CSSProperties["color"];
      titleActive: React.CSSProperties["color"];
      dialogBackground: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    common: {
      line: React.CSSProperties["color"];
      inputBackground: React.CSSProperties["color"];
      adminElement: React.CSSProperties["color"];
      background: React.CSSProperties["color"];
      adminBackground: React.CSSProperties["color"];
      offWhite: React.CSSProperties["color"];
      placeholder: React.CSSProperties["color"];
      label: React.CSSProperties["color"];
      body: React.CSSProperties["color"];
      titleActive: React.CSSProperties["color"];
      dialogBackground: React.CSSProperties["color"];
    };
  }
  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    body1: true;
    body2: true;
    caption: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const PRIMARY = "#0D203B";
const LINE = "#E8E8E8";
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        // text: {
        //   textTransform: "none",
        // },
      },
    },
  },
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: "#EF5241",
    },
    error: {
      main: "#4BE4FF",
    },
    success: {
      main: "#27AE60",
    },
  },
  common: {
    line: LINE,
    inputBackground: "#F4F5F7",
    background: PRIMARY,
    adminBackground: "#131313",
    adminElement: "#1D1D1D",
    offWhite: "#A0A0A0",
    placeholder: LINE,
    label: LINE,
    body: "#FFFFFF",
    titleActive: PRIMARY,
    dialogBackground: "#626262",
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontSize: "2.8125rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5625rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.725rem",
      fontWeight: 300,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 992,
      desktop: 1200,
    },
  },
});

export default theme;
