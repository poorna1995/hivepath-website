import { createTheme } from "@material-ui/core";
import fontfaces from "./fonts";
import { colorPaletteDark } from "./colors";
const theme = createTheme({
  palette: colorPaletteDark,

  typography: {
    fontFamily: "Inter, sans-serif",
    h3: {
      fontSize: "36px",
    },
    subtitle1: {
      fontSize: 12,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [fontfaces],
      },
    },
  },
});

theme.typography.h3 = {
  fontSize: "28px",
  [theme.breakpoints.up("md")]: {
    fontSize: "36px",
  },
};

theme.typography.h4 = {
  fontSize: "24px",
  "@media (min-width:600px)": {
    fontSize: "36px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
};

export default theme;
