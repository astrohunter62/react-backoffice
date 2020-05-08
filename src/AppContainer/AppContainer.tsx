import React from "react";
import { blueGrey, orange } from "@material-ui/core/colors";
import {
  ThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const defaultTheme = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
  },
};

type AppContainerProps = {
  theme?: {
    [key: string]: any;
  };
};

// Apply some reset
const styles = (theme: any) => ({
  "@global": {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: "antialiased", // Antialiasing.
      MozOsxFontSmoothing: "grayscale", // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
});

const BaseComponent = withStyles(styles)((props) => props.children as any);
const AppContainer: React.SFC<AppContainerProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <BaseComponent>{children}</BaseComponent>
    </ThemeProvider>
  );
};

export default AppContainer;
