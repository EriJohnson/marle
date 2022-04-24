export const components = {
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
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
    },
  },
};
