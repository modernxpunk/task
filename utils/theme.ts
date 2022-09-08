import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const gamma = {
  main: "#7F5A83",
  minor: "#0D324D"
}

const background = {
  backgroundColor: gamma.minor,
  background: `linear-gradient(225deg, ${gamma.minor} 0%, ${gamma.main} 100%)`,
}

const glassomorphism = {
  background: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
}

let theme = createTheme({
  palette: {
    primary: {
      main: gamma.main
    }
  },
  typography: {
    allVariants: {
      color: gamma.main,
      fontWeight: 600
    }
  },
  components: {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          background: gamma.main,
          opacity: .2,
          backdropFilter: "blur(5px)",
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          ...glassomorphism,
          color: gamma.main
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: gamma.main
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: gamma.minor,
          color: gamma.main
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...glassomorphism,
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: gamma.main
          },
        },
      },
      defaultProps: {
        fullWidth: true,
        autoComplete: "off",
        variant: "standard"
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...background,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...glassomorphism,
          color: gamma.main 
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ...glassomorphism,
        }
      },
    },
  }
})

theme = responsiveFontSizes(theme)

export default theme