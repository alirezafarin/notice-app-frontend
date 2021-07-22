import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import App from 'Components/Main/App';
import Root from 'Root';
import { darkBlue, darkerBlue } from 'globalVariables';


const theme = createTheme({
  palette: {
    primary: {
      main: darkerBlue,
    },  
    secondary: {
      main: darkBlue
    },
  },
  breakpoints: {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    values: {
      xs: 0,
      sm: 425,
      md: 850,
      lg: 1280,
      xl: 1920,
    }
  }
})

ReactDOM.render(
  <Root>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Root>,
  document.getElementById('root')
);