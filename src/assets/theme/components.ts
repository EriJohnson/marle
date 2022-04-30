export const components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: 16,
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
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
    },
  },
};
