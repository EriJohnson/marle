import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#363435',
    },
    secondary: {
      main: '#FFCC2A',
    },
    error: {
      main: '#E60000',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          paddingTop: 16,
          paddingBottom: 16,
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
