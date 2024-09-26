"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: `var(--font-vazirmatn), ${roboto.style.fontFamily}`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "hsla(215, 15%, 97%, 0.5)",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
