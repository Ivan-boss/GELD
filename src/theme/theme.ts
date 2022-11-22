import { createTheme } from "@mui/material/styles";
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
      main: "#0B77DB",
    },
    secondary: {
      main: "#9E4CEB",
    },
    error: {
      main: "#DD0303",
    },
    success: {
      main: "#00BA88",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

export default theme;
