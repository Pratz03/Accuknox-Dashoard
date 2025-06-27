import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#6c757d',
    },

    background: {
      default: '#efefef',
      paper: '#ffffff',
    },

    text: {
      primary: '#212529', 
      secondary: '#6c757d',
    },

    divider: '#e0e0e0',
  },

  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
