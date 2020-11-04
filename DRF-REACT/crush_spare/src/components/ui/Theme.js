import { createMuiTheme } from "@material-ui/core/styles";

const robGrey = "#adb5bd";
const robGreen = "#00A94F";
const robWhite = "#FFFFFF";
const robLightGrey = "#f8f9fa";
const robDarkGrey = "#F1F0F0";

export default createMuiTheme({
  palette: {
    common: {
      blue: robGrey,
      orange: robGreen,
      grey: robLightGrey,
      darkGrey: robDarkGrey,
      green: robGreen,
    },
    primary: {
      main: robWhite,
    },
    secondary: {
      main: robGreen,
    },
  },
  typography: {
    tab: {
      fontFamily: "Merriweather",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h3: {
      fontSize: "2em",
    },
    h2: {
      fontFamily: "Merriweather",
      fontWeight: 700,
      fontSize: "2.7rem",
      color: "#000000",
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Merriweather",
      fontWeight: 700,
      fontSize: "1.7rem",
      color: "#000000",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#000000",
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 100,
      color: "#000000",
    },
    learnButton: {
      color: "#2c2e2e",
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      borderColor: robGrey,
    },
    demo: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      height: "45px",
      color: "whie",
    },
  },
});
