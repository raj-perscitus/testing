import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import config from "./config";

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }
console.log('config.theme: ', process.env)
const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          background: config.theme
        },
      },
    },
  },
});

export default function GlobalThemeProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      sa
    </ThemeProvider>
  );
}
