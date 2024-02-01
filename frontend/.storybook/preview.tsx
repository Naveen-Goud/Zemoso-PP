import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../src/theme"; 

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>  
          <Story /> 
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
