import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: colors.common.white
    },
    primary: {
      contrastText: "#ffffff",
      main: "#5664d2"
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c"
    }
  },
  shadows,
  typography,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& :-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #ffffff inset"
          },
          "& :-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px #ffffff inset"
          },
          "& :-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 1000px #ffffff inset"
          }
        }
      }
    }
  }
});

export default theme;
