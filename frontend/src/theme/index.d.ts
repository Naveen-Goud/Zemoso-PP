import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    caption1: TypographyStyleOptions;
    caption2: TypographyStyleOptions;
    caption3: TypographyStyleOptions;
  }
  interface TypographyVariantsOptions {
    caption1?: TypographyStyleOptions;
    caption2?: TypographyStyleOptions;
    caption3?: TypographyStyleOptions;
  }
  interface Palette {
    textColor: {
      white: string;
      lowEmp: string;
      medEmp: string;
      highEmp: string;
    };
    accent: {
      blue: string;
      lightBlue: string;
      green: string;
      lightGreen: string;
      yellow: string;
      lightYellow: string;
      red: string;
      lightRed: string;
    };
    structural: {
      white: string;
      stroke: string;
      iconLight: string;
      iconDark: string;
    };
  }
  interface PaletteOptions {
    textColor: {
      white: string;
      lowEmp: string;
      medEmp: string;
      highEmp: string;
    };
    accent: {
      blue: string;
      lightBlue: string;
      green: string;
      lightGreen: string;
      yellow: string;
      lightYellow: string;
      red: string;
      lightRed: string;
    };
    structural: {
      white: string;
      stroke: string;
      iconLight: string;
      iconDark: string;
    };
  }
  interface PaletteColor {
    50: string;
    100: string;
    300: string;
    400: string;
    500: string;
    700: string;
  }
  interface SimplePaletteColorOptions {
    50?: string;
    100?: string;
    300?: string;
    400?: string;
    500?: string;
    700?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    caption3: true;
  }
}
