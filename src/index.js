import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import App from 'Components/Main/App';
import Root from 'Root';


const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#0a97bb',
  //   },  
  //   secondary: {
  //     main: '#800000'
  //   },
  //   success: {
  //     main: '#008e59'
  //   },
  //   info: {
  //     main: '#f0f0f0'
  //   }
  // },
  // breakpoints: {
  //   keys: [
  //     "xs",
  //     "sm",
  //     "md",
  //     "lg",
  //     "xl"
  //   ],
  //   values: {
  //     xs: 0,
  //     sm: 425,
  //     md: 850,
  //     lg: 1280,
  //     xl: 1920,
  //   }
  // }
})

ReactDOM.render(
  <Root>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Root>,
  document.getElementById('root')
);