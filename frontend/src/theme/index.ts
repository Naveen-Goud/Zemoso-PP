import { createTheme } from "@mui/material";
import "./index.d";
import type { } from "@mui/x-data-grid/themeAugmentation";

const fontFace = {
  interMedium: {
    fontFamily: "Inter-Medium",
    src: `url('/assets/fonts/inter/Inter-Medium.ttf')`,
  },
  interRegular: {
    fontFamily: "Inter-Regular",
    src: `url('/assets/fonts/inter/Inter-Regular.ttf')`,
  },
};

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      50: "#FAFAFC",
      100: "#F7F8FA",
      300: "#EFF2FF",
      400: "#95AAFF",
      500: "#224DFF",
      700: "#1132B7",
    },
    textColor: {
      white: "#FFFFFF",
      lowEmp: "#818287",
      medEmp: "#696A6E",
      highEmp: "#2C2C2E",
    },
    accent: {
      blue: "#3E5FE2",
      lightBlue: "#F2F4FC",
      green: "#17A076",
      lightGreen: "#F2FCFB",
      yellow: "#A08817",
      lightYellow: "#FAF8EB",
      red: "#FF0000",
      lightRed: "#FCE5EA",
    },
    structural: {
      white: "#FFFFFF",
      stroke: "#E5E7ED",
      iconLight: "#696A6E",
      iconDark: "#3E414D",
    },
  },
  typography: {
    h1: {
      "@font-face": fontFace.interMedium,
      fontFamily: "Inter-Medium",
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.875rem",
    },
    h2: {
      "@font-face": fontFace.interMedium,
      fontFamily: "Inter-Medium",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.75rem",
    },
    subtitle1: {
      "@font-face": fontFace.interMedium,
      fontFamily: "Inter-Medium",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.5rem",
    },
    body1: {
      "@font-face": fontFace.interMedium,
      fontFamily: "Inter-Medium",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.25rem",
    },
    body2: {
      "@font-face": fontFace.interRegular,
      fontFamily: "Inter-Regular",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.25rem",
    },
    caption1: {
      "@font-face": fontFace.interMedium,
      fontFamily: "Inter-Medium",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.125rem",
      textTransform: "capitalize",
    },
    caption2: {
      "@font-face": fontFace.interRegular,
      fontFamily: "Inter-Regular",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.125rem",
    },
    caption3: {
      "@font-face": fontFace.interRegular,
      fontFamily: "Inter-Regular",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.125rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#95AAFF",
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "&. MuiDatGrid-columnHeader .MuiDataGrid-cell": {
            padding: 0,
          },
        },
        cell: {
          padding: "14px 16px",
          "&:focus": {
            outline: "none",
          },
          "&:focus-within": {
            outline: "none",
          },
        },
        row: {
          cursor: "pointer",
          backgroundColor: '#FFFFFF'
        },

        columnHeaderTitleContainer: {
          padding: "12px 16px",
          textTransform: "uppercase",
          "@font-face": fontFace.interMedium,
          fontFamily: "Inter-Medium",
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "1.125rem",
          color: "#696A6E",
          "&:focus": {
            outline: "none",
          },
          "&:focus-within": {
            outline: "none",
          },
        },
        columnHeader: {
          backgroundColor: "#F7F8FA",
          padding: 0,
        },
        iconSeparator: {
          display: "none",
        },
      },
    },
  },
});
