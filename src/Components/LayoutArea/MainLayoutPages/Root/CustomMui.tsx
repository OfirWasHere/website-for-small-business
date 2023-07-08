import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customMuiTheme = createTheme({
    // Customize your theme properties here
    palette: {
      mode: 'dark'
      // primary: {
      //   main: 'rgb(1,1,1,0)',
      // },
      // Other palette properties
    },
    // Other custom theme properties
  });
  
  export default customMuiTheme;